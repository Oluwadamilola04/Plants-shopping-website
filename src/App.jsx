import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import { CartIcon, LeafIcon } from './components/Icons.jsx';
import { selectCartTotalQuantity } from './features/CartSlice.jsx';

function getPageFromHash() {
  const page = window.location.hash.replace('#/', '').replace('#', '');
  return page === 'plants' || page === 'cart' ? page : 'home';
}

function Header({ page, onNavigate }) {
  const cartQuantity = useSelector(selectCartTotalQuantity);

  return (
    <header className={`site-header ${page === 'home' ? 'home-header' : ''}`}>
      <button
        type="button"
        className="brand button-link"
        aria-label="Paradise Nursery home"
        onClick={() => onNavigate('home')}
      >
        <LeafIcon size={28} aria-hidden="true" />
        <span>Paradise Nursery</span>
      </button>

      <nav className="nav-links" aria-label="Primary navigation">
        <button
          type="button"
          className={page === 'home' ? 'active' : ''}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>
        <button
          type="button"
          className={page === 'plants' ? 'active' : ''}
          onClick={() => onNavigate('plants')}
        >
          Plants
        </button>
        <button
          type="button"
          className={`cart-link ${page === 'cart' ? 'active' : ''}`}
          aria-label="Shopping cart"
          onClick={() => onNavigate('cart')}
        >
          <CartIcon size={24} aria-hidden="true" />
          <span className="cart-count">{cartQuantity}</span>
        </button>
      </nav>
    </header>
  );
}

function LandingPage({ onNavigate }) {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="landing-content" aria-labelledby="landing-title">
          <p className="eyebrow">Houseplants for brighter everyday spaces</p>
          <h1 id="landing-title">Paradise Nursery</h1>
          <AboutUs />
          <button
            type="button"
            className="primary-action"
            onClick={() => onNavigate('plants')}
          >
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
}

function App() {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (nextPage) => {
    const hash = nextPage === 'home' ? '#/' : `#/${nextPage}`;
    window.location.hash = hash;
    setPage(nextPage);
  };

  const pageContent = {
    home: <LandingPage onNavigate={navigate} />,
    plants: <ProductList />,
    cart: <CartItem onNavigate={navigate} />
  }[page];

  return (
    <>
      <Header page={page} onNavigate={navigate} />
      {pageContent}
    </>
  );
}

export default App;

import { useDispatch, useSelector } from 'react-redux';
import { CartIcon } from './Icons.jsx';
import { addToCart, selectIsInCart } from '../features/CartSlice.jsx';

const plantCategories = [
  {
    name: 'Air Purifying',
    plants: [
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        price: 24,
        image:
          'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        price: 28,
        image:
          'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'spider-plant',
        name: 'Spider Plant',
        price: 18,
        image:
          'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'rubber-plant',
        name: 'Rubber Plant',
        price: 35,
        image:
          'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'boston-fern',
        name: 'Boston Fern',
        price: 22,
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'english-ivy',
        name: 'English Ivy',
        price: 20,
        image:
          'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    name: 'Low Light Favorites',
    plants: [
      {
        id: 'zz-plant',
        name: 'ZZ Plant',
        price: 30,
        image:
          'https://images.unsplash.com/photo-1614594075920-ea579e67db6f?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'pothos',
        name: 'Golden Pothos',
        price: 16,
        image:
          'https://images.unsplash.com/photo-1620127252536-03bdfcf6d5a4?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cast-iron',
        name: 'Cast Iron Plant',
        price: 32,
        image:
          'https://images.unsplash.com/photo-1616500165763-354f294d1660?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'philodendron',
        name: 'Heartleaf Philodendron',
        price: 19,
        image:
          'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'parlor-palm',
        name: 'Parlor Palm',
        price: 27,
        image:
          'https://images.unsplash.com/photo-1604762525959-13c07b76f81b?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'chinese-evergreen',
        name: 'Chinese Evergreen',
        price: 26,
        image:
          'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    name: 'Petite Desk Plants',
    plants: [
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        price: 14,
        image:
          'https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        price: 15,
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'mini-monstera',
        name: 'Mini Monstera',
        price: 29,
        image:
          'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'string-of-pearls',
        name: 'String of Pearls',
        price: 21,
        image:
          'https://images.unsplash.com/photo-1614594075920-ea579e67db6f?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'baby-rubber',
        name: 'Baby Rubber Plant',
        price: 17,
        image:
          'https://images.unsplash.com/photo-1545165375-1b744b9ed444?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'nerve-plant',
        name: 'Nerve Plant',
        price: 13,
        image:
          'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const isInCart = useSelector(selectIsInCart(plant.id));

  return (
    <article className="product-card">
      <img src={plant.image} alt={plant.name} />
      <div className="product-card-body">
        <h3>{plant.name}</h3>
        <p className="price">${plant.price.toFixed(2)}</p>
        <button
          className="add-button"
          type="button"
          disabled={isInCart}
          onClick={() => dispatch(addToCart(plant))}
        >
          <CartIcon size={18} aria-hidden="true" />
          {isInCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}

function ProductList() {
  return (
    <main className="page-shell product-page">
      <section className="page-intro">
        <p className="eyebrow">Fresh arrivals</p>
        <h1>Choose Your Plants</h1>
      </section>

      {plantCategories.map((category) => (
        <section className="category-section" key={category.name}>
          <h2>{category.name}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;

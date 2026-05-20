import { useDispatch, useSelector } from 'react-redux';
import { MinusIcon, PlusIcon, TrashIcon } from './Icons.jsx';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotalCost,
  selectCartTotalQuantity
} from '../features/CartSlice.jsx';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalCost = useSelector(selectCartTotalCost);

  return (
    <main className="page-shell cart-page">
      <section className="cart-summary">
        <p className="eyebrow">Shopping cart</p>
        <h1>Your Plant Picks</h1>
        <div className="summary-stats" aria-label="Cart totals">
          <div>
            <span>Total plants</span>
            <strong>{totalQuantity}</strong>
          </div>
          <div>
            <span>Total cost</span>
            <strong>${totalCost.toFixed(2)}</strong>
          </div>
        </div>
      </section>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is waiting for something green.</h2>
          <button
            type="button"
            className="secondary-action"
            onClick={() => onNavigate('plants')}
          >
            Continue Shopping
          </button>
        </section>
      ) : (
        <section className="cart-layout" aria-label="Cart items">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-main">
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p className="line-total">
                    Item total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="quantity-controls" aria-label={`${item.name} quantity`}>
                  <button
                    type="button"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    aria-label={`Decrease ${item.name}`}
                  >
                    <MinusIcon size={18} aria-hidden="true" />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    aria-label={`Increase ${item.name}`}
                  >
                    <PlusIcon size={18} aria-hidden="true" />
                  </button>
                </div>
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <TrashIcon size={18} aria-hidden="true" />
                  Delete
                </button>
              </article>
            ))}
          </div>

          <aside className="checkout-panel">
            <h2>Order Summary</h2>
            <p>{totalQuantity} plant{totalQuantity === 1 ? '' : 's'}</p>
            <strong>${totalCost.toFixed(2)}</strong>
            <button
              type="button"
              className="secondary-action"
              onClick={() => onNavigate('plants')}
            >
              Continue Shopping
            </button>
            <button
              type="button"
              className="primary-action checkout-button"
              onClick={() => window.alert('Coming Soon')}
            >
              Checkout
            </button>
          </aside>
        </section>
      )}
    </main>
  );
}

export default CartItem;

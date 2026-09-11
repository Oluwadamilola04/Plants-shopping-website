import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { ...plant, quantity: 1 };
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        delete state.items[action.payload];
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    }
  }
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} = cartSlice.actions;

const selectCartItemsById = (state) => state.cart.items;

export const selectCartItems = createSelector(
  [selectCartItemsById],
  (items) => Object.values(items)
);

export const selectCartTotalQuantity = (state) =>
  selectCartItems(state).reduce((total, item) => total + item.quantity, 0);

export const selectCartTotalCost = (state) =>
  selectCartItems(state).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export const selectIsInCart = (plantId) => (state) =>
  Boolean(state.cart.items[plantId]);

export default cartSlice.reducer;

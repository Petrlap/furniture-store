import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    showForm: false,
  },
  reducers: {
    addToOrder(state, action) {
      if (!state.orders.some((o) => o.id === action.payload.id)) {
        state.orders.push({
          id: action.payload.id,
          title: action.payload.title,
          img: action.payload.img,
          desc: action.payload.desc,
          category: action.payload.category,
          price: action.payload.price,
        });
      }
    },
    deleteOrder(state, action) {
      state.orders = state.orders.filter((e) => e.id !== action.payload.id);
    },
    onShowForm(state, action) {
      state.showForm = !state.showForm;
    },
  },
});

export const { addToOrder, deleteOrder, onShowForm } = ordersSlice.actions;

export default ordersSlice.reducer;

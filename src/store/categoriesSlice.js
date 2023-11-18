import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      {
        key: "all",
        name: "Все",
      },
      {
        key: "dressers",
        name: "Комоды",
      },
      {
        key: "armchairs",
        name: "Кресла",
      },
      {
        key: "lamps",
        name: "Лампы",
      },
      {
        key: "sofas",
        name: "Диваны",
      },
    ],
  },
  reducers: {
    addCategory() {},
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

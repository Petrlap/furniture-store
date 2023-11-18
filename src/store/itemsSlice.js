import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [
      {
        id: 1,
        title: "Комод",
        img: "dresser.jpg",
        desc: "Минималистичный комод для вашей комнаты отдыха",
        category: "dressers",
        price: "150.00",
      },
      {
        id: 2,
        title: "Кресло",
        img: "armchair.jpg",
        desc: "Мягкое кресло будет отличным дополнением для гостинной",
        category: "armchairs",
        price: "95.00",
      },
      {
        id: 3,
        title: "Лампа",
        img: "lamp_orange.jpg",
        desc: "Оранжевая лампа станет ярким акцентом",
        category: "lamps",
        price: "32.00",
      },
      {
        id: 4,
        title: "Лампа",
        img: "lamp_black.jpg",
        desc: "Напольная лампа подчеркивает эстетику помещения",
        category: "lamps",
        price: "30.00",
      },
      {
        id: 5,
        title: "Лампа",
        img: "lamp_gray.jpg",
        desc: "Серая лампа отлично впишется в любой дизайн",
        category: "lamps",
        price: "25.00",
      },
      {
        id: 6,
        title: "Диван",
        img: "sofa.jpg",
        desc: "Минималистичный и комфортабельный диван",
        category: "sofas",
        price: "375.00",
      },
    ],
    currentItems: [
      {
        id: 1,
        title: "Комод",
        img: "dresser.jpg",
        desc: "Минималистичный комод для вашей комнаты отдыха",
        category: "dressers",
        price: "150.00",
      },
      {
        id: 2,
        title: "Кресло",
        img: "armchair.jpg",
        desc: "Мягкое кресло будет отличным дополнением для гостинной",
        category: "armchairs",
        price: "95.00",
      },
      {
        id: 3,
        title: "Лампа",
        img: "lamp_orange.jpg",
        desc: "Оранжевая лампа станет ярким акцентом",
        category: "lamps",
        price: "32.00",
      },
      {
        id: 4,
        title: "Лампа",
        img: "lamp_black.jpg",
        desc: "Напольная лампа подчеркивает эстетику помещения",
        category: "lamps",
        price: "30.00",
      },
      {
        id: 5,
        title: "Лампа",
        img: "lamp_gray.jpg",
        desc: "Серая лампа отлично впишется в любой дизайн",
        category: "lamps",
        price: "25.00",
      },
      {
        id: 6,
        title: "Диван",
        img: "sofa.jpg",
        desc: "Минималистичный и комфортабельный диван",
        category: "sofas",
        price: "375.00",
      },
    ],
    showFullItem: false,
    fullItem: {},
  },
  reducers: {
    updateCurrentItems(state, action) {
      if (action.payload === "all") {
        state.currentItems = state.items;
        return;
      }
      state.currentItems = state.items.filter(
        (e) => e.category === action.payload
      );
    },
    onShowItem(state, action) {
      state.fullItem = action.payload;
      state.showFullItem = !state.showFullItem;
    },
  },
});

export const { updateCurrentItems, onShowItem } = itemsSlice.actions;

export default itemsSlice.reducer;

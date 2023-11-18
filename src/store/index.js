import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import ordersReducer from './ordersSlice';
import categoriesSlice from './categoriesSlice';

export default configureStore({
    reducer: {
        items: itemsReducer,
        orders: ordersReducer,
        categories: categoriesSlice
    }
});
import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import cartReducer from './slices/cartSlice';
import notificationReducer from './slices/notificationSlice';
import themeReducer from './slices/themeSlice';
import wishlistReducer from './slices/wishlistSlice';

export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        cart: cartReducer,
        notifications: notificationReducer,
        theme: themeReducer,
        wishlist: wishlistReducer,
    },
});

export default store; 
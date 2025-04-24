import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurants: [
        {
            id: 1,
            name: 'Italian Delight',
            cuisine: 'italian',
            rating: 4.5,
            deliveryTime: '30-45 min',
            price: '$20',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isFavorite: false
        },
        {
            id: 2,
            name: 'Spice Garden',
            cuisine: 'indian',
            rating: 4.8,
            deliveryTime: '25-40 min',
            price: '$15',
            image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isFavorite: false
        },
        {
            id: 3,
            name: 'Sushi Master',
            cuisine: 'japanese',
            rating: 4.7,
            deliveryTime: '35-50 min',
            price: '$25',
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isFavorite: false
        },
        {
            id: 4,
            name: 'Taco Fiesta',
            cuisine: 'mexican',
            rating: 4.3,
            deliveryTime: '20-35 min',
            price: '$18',
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isFavorite: false
        },
        {
            id: 5,
            name: 'Dragon Wok',
            cuisine: 'chinese',
            rating: 4.4,
            deliveryTime: '30-45 min',
            price: '$22',
            image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isFavorite: false
        },
        {
            id: 6,
            name: 'Le Bistro',
            cuisine: 'french',
            rating: 4.6,
            deliveryTime: '40-55 min',
            price: '$28',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isFavorite: false
        }
    ],
    selectedCategory: 'all',
    sortBy: 'rating',
    searchQuery: '',
};

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        toggleFavorite: (state, action) => {
            const restaurant = state.restaurants.find(r => r.id === action.payload);
            if (restaurant) {
                restaurant.isFavorite = !restaurant.isFavorite;
            }
        },
    },
});

export const { setSelectedCategory, setSortBy, setSearchQuery, toggleFavorite } = restaurantSlice.actions;
export default restaurantSlice.reducer; 
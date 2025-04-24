import { createSlice } from '@reduxjs/toolkit';

// Initialize theme from localStorage or default to dark
const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'dark';
    }
    return true; // Default to dark mode
};

const initialState = {
    isDarkMode: getInitialTheme(),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            // Update localStorage
            localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
            // Update document class
            if (state.isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
        setTheme: (state, action) => {
            state.isDarkMode = action.payload;
            // Update localStorage
            localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
            // Update document class
            if (state.isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer; 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTheme } from '../store/slices/themeSlice';

const ThemeProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeTheme());
    }, [dispatch]);

    return children;
};

export default ThemeProvider; 
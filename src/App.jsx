import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';
import store from './store';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Cuisines from './pages/Cuisines';
import About from './pages/About';
import RestaurantDetails from './pages/RestaurantDetails';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import NotificationContainer from './components/NotificationContainer';
import { toggleTheme, setTheme } from './store/slices/themeSlice';

function AppContent() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch(setTheme(savedTheme === 'dark'));
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Set default theme (dark)
      dispatch(setTheme(true));
      document.documentElement.classList.add('dark');
    }
  }, [dispatch]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={handleThemeToggle}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group ${isDarkMode
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
          : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
        aria-label="Toggle theme"
      >
        <div className="relative w-6 h-6">
          <Sun
            className={`absolute w-6 h-6 transition-all duration-500 ${!isDarkMode
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
              }`}
          />
          <Moon
            className={`absolute w-6 h-6 transition-all duration-500 ${isDarkMode
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-0'
              }`}
          />
        </div>
        {/* Tooltip */}
        <span className={`absolute right-12 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${isDarkMode
          ? 'bg-gray-800 text-white'
          : 'bg-white text-gray-900'
          } shadow-lg`}>
          
        </span>
      </button>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/cuisines" element={<Cuisines />} />
            <Route path="/about" element={<About />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <NotificationContainer />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;
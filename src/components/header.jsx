import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const wishlistItems = useSelector(state => state.wishlist.items);

    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:scale-105 transition-transform">
                        LocalFoodie
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for restaurants or cuisines..."
                                className="w-full px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                            />
                            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/restaurants" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                            Restaurants
                        </Link>
                        <Link to="/cuisines" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                            Cuisines
                        </Link>
                        <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                            About
                        </Link>
                    </nav>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                        <Link to="/wishlist" className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 hover:scale-110 relative">
                            <Heart className="h-6 w-6" />
                            {wishlistItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {wishlistItems.length}
                                </span>
                            )}
                        </Link>
                        <Link to="/cart" className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 hover:scale-110">
                            <ShoppingCart className="h-6 w-6" />
                        </Link>
                        <Link to="/profile" className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 hover:scale-110">
                            <User className="h-6 w-6" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-slideDown">
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Search for restaurants or cuisines..."
                                className="w-full px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                            />
                            <Link to="/restaurants" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                                Restaurants
                            </Link>
                            <Link to="/cuisines" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                                Cuisines
                            </Link>
                            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                                About
                            </Link>
                            <Link to="/wishlist" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                                Wishlist
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
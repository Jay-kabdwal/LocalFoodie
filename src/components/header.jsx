import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-primary">
                        LocalFoodie
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for restaurants or cuisines..."
                                className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/restaurants" className="text-gray-600 hover:text-primary">
                            Restaurants
                        </Link>
                        <Link to="/cuisines" className="text-gray-600 hover:text-primary">
                            Cuisines
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-primary">
                            About
                        </Link>
                    </nav>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-600 hover:text-primary">
                            <ShoppingCart className="h-6 w-6" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-primary">
                            <User className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
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
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Search for restaurants or cuisines..."
                                className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <Link to="/restaurants" className="text-gray-600 hover:text-primary">
                                Restaurants
                            </Link>
                            <Link to="/cuisines" className="text-gray-600 hover:text-primary">
                                Cuisines
                            </Link>
                            <Link to="/about" className="text-gray-600 hover:text-primary">
                                About
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">LocalFoodie</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Discover and enjoy the best local cuisine in your area. Supporting local restaurants and bringing authentic flavors to your doorstep.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/restaurants" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                    Restaurants
                                </Link>
                            </li>
                            <li>
                                <Link to="/cuisines" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                    Cuisines
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/help" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Stay Updated</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Subscribe to our newsletter for the latest updates and offers.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-l-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button className="bg-primary text-white px-4 py-2 rounded-r-full hover:bg-primary/90">
                                <Mail className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
                    <p>&copy; {new Date().getFullYear()} LocalFoodie. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
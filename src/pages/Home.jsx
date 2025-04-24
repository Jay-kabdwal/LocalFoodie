import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Clock, DollarSign, Heart, ShoppingCart } from 'lucide-react';
import {
    toggleFavorite,
    setSelectedCategory,
    setSortBy,
    setSearchQuery,
} from '../store/slices/restaurantSlice';
import { addToCart } from '../store/slices/cartSlice';
import Carousel from '../components/Carousel';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        restaurants,
        selectedCategory,
        sortBy,
        searchQuery,
    } = useSelector(state => state.restaurants);

    // Sample cuisine categories
    const categories = [
        { id: 'all', name: 'All', icon: '🍽️' },
        { id: 'italian', name: 'Italian', icon: '🍝' },
        { id: 'indian', name: 'Indian', icon: '🍛' },
        { id: 'japanese', name: 'Japanese', icon: '🍱' },
        { id: 'mexican', name: 'Mexican', icon: '🌮' },
        { id: 'chinese', name: 'Chinese', icon: '🥢' },
        { id: 'french', name: 'French', icon: '🥖' },
        { id: 'mediterranean', name: 'Mediterranean', icon: '🥙' },
        { id: 'thai', name: 'Thai', icon: '🍜' },
    ];

    // Filter and sort restaurants
    const filteredRestaurants = restaurants
        .filter(restaurant => {
            const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || restaurant.cuisine.toLowerCase() === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'price':
                    return a.price.length - b.price.length;
                case 'time':
                    return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
                default:
                    return 0;
            }
        });

    const handleAddToCart = (restaurant) => {
        dispatch(addToCart({
            id: restaurant.id,
            name: restaurant.name,
            price: parseFloat(restaurant.price.replace('$', '')),
            image: restaurant.image
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Carousel Section */}
            <Carousel />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 animate-fadeIn">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slideUp">
                        Discover the taste of your neighborhood!
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 animate-slideUp delay-100">
                        Explore local restaurants and enjoy authentic flavors delivered to your doorstep.
                    </p>
                    <button
                        onClick={() => navigate('/restaurants')}
                        className="bg-white dark:bg-gray-800 text-primary dark:text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 animate-slideUp delay-200 shadow-lg"
                    >
                        Explore Now
                    </button>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="container mx-auto px-4 py-8 animate-fadeIn">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    {/* Search Bar */}
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search for restaurants or cuisines..."
                            value={searchQuery}
                            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                            className="w-full px-4 py-3 rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        />
                        <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-300" />
                    </div>

                    {/* Sort Options */}
                    <div className="flex gap-4">
                        <select
                            value={sortBy}
                            onChange={(e) => dispatch(setSortBy(e.target.value))}
                            className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        >
                            <option value="rating">Sort by Rating</option>
                            <option value="price">Sort by Price</option>
                            <option value="time">Sort by Delivery Time</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="container mx-auto px-4 py-8 animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Popular Cuisines</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => dispatch(setSelectedCategory(category.id))}
                            className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${selectedCategory === category.id
                                ? 'border-primary bg-primary/10'
                                : 'border-gray-200 dark:border-gray-600 hover:border-primary'
                                }`}
                        >
                            <span className="text-2xl mb-2 block">{category.icon}</span>
                            <span className="font-medium text-gray-900 dark:text-white">{category.name}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Restaurants Grid */}
            <section className="container mx-auto px-4 py-8 animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured Restaurants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRestaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    src={restaurant.image}
                                    alt={restaurant.name}
                                    className="w-full h-48 object-cover"
                                />
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(toggleFavorite(restaurant.id));
                                    }}
                                    className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                                >
                                    <Heart
                                        className={`h-5 w-5 ${restaurant.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400 dark:text-gray-300'
                                            }`}
                                    />
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{restaurant.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">{restaurant.cuisine}</p>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Star className="h-5 w-5 text-yellow-400" />
                                        <span className="text-gray-900 dark:text-white">{restaurant.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                                        <span className="text-gray-900 dark:text-white">{restaurant.deliveryTime}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                                        <span className="text-gray-900 dark:text-white">{restaurant.price}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleAddToCart(restaurant)}
                                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home; 
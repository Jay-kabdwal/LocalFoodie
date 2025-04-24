import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, DollarSign, Trash2, ShoppingCart, Heart } from 'lucide-react';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import { toggleFavorite } from '../store/slices/restaurantSlice';

const Wishlist = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);
    const favoriteRestaurants = useSelector(state =>
        state.restaurants.restaurants.filter(restaurant => restaurant.isFavorite)
    );

    const handleRemoveFromWishlist = (id) => {
        dispatch(removeFromWishlist(id));
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart({
            id: item.id,
            name: item.name,
            price: parseFloat(item.price.replace('$', '')),
            image: item.image
        }));
    };

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        My Favorites
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Your favorite restaurants and saved items.
                    </p>
                </div>
            </section>

            {/* Favorite Restaurants Section */}
            <section className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Favorite Restaurants</h2>
                {favoriteRestaurants.length === 0 ? (
                    <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            No favorite restaurants yet
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Start adding restaurants to your favorites!
                        </p>
                        <button
                            onClick={() => navigate('/restaurants')}
                            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300"
                        >
                            Explore Restaurants
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favoriteRestaurants.map((restaurant) => (
                            <div
                                key={restaurant.id}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                <div className="relative">
                                    <img
                                        src={restaurant.image}
                                        alt={restaurant.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <button
                                        onClick={() => handleToggleFavorite(restaurant.id)}
                                        className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                                    >
                                        <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {restaurant.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                                        {restaurant.cuisine}
                                    </p>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Star className="h-5 w-5 text-yellow-400" />
                                            <span className="text-gray-900 dark:text-white">
                                                {restaurant.rating}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                                            <span className="text-gray-900 dark:text-white">
                                                {restaurant.deliveryTime}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                                            <span className="text-gray-900 dark:text-white">
                                                {restaurant.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleAddToCart(restaurant)}
                                            className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2 transition-all duration-300"
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                            Add to Cart
                                        </button>
                                        <button
                                            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                                            className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Saved Items Section */}
            <section className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Saved Items</h2>
                {wishlistItems.length === 0 ? (
                    <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            No saved items
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Start saving items to your wishlist!
                        </p>
                        <button
                            onClick={() => navigate('/restaurants')}
                            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300"
                        >
                            Explore Restaurants
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <button
                                        onClick={() => handleRemoveFromWishlist(item.id)}
                                        className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                                    >
                                        <Trash2 className="h-5 w-5 text-red-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                                        {item.cuisine}
                                    </p>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Star className="h-5 w-5 text-yellow-400" />
                                            <span className="text-gray-900 dark:text-white">
                                                {item.rating}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                                            <span className="text-gray-900 dark:text-white">
                                                {item.deliveryTime}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                                            <span className="text-gray-900 dark:text-white">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleAddToCart(item)}
                                            className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2 transition-all duration-300"
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                            Add to Cart
                                        </button>
                                        <button
                                            onClick={() => navigate(`/restaurant/${item.id}`)}
                                            className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Wishlist; 
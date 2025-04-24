import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, DollarSign, Heart, ShoppingCart } from 'lucide-react';
import { toggleFavorite } from '../store/slices/restaurantSlice';
import { addToCart } from '../store/slices/cartSlice';

const Cuisines = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { restaurants } = useSelector(state => state.restaurants);

    // Sample cuisine categories with descriptions
    const cuisines = [
        {
            id: 'italian',
            name: 'Italian',
            icon: '🍝',
            description: 'Authentic Italian cuisine featuring pasta, pizza, and Mediterranean flavors.',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'indian',
            name: 'Indian',
            icon: '🍛',
            description: 'Rich and diverse Indian cuisine with aromatic spices and traditional dishes.',
            image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'japanese',
            name: 'Japanese',
            icon: '🍱',
            description: 'Elegant Japanese cuisine featuring sushi, ramen, and traditional dishes.',
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'mexican',
            name: 'Mexican',
            icon: '🌮',
            description: 'Vibrant Mexican cuisine with bold flavors and authentic street food.',
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'chinese',
            name: 'Chinese',
            icon: '🥢',
            description: 'Diverse Chinese cuisine with regional specialties and traditional dishes.',
            image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'french',
            name: 'French',
            icon: '🥖',
            description: 'Sophisticated French cuisine with classic techniques and elegant dishes.',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'mediterranean',
            name: 'Mediterranean',
            icon: '🥙',
            description: 'Healthy Mediterranean cuisine with fresh ingredients and olive oil-based dishes.',
            image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'thai',
            name: 'Thai',
            icon: '🍜',
            description: 'Flavorful Thai cuisine with a perfect balance of sweet, sour, and spicy.',
            image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
    ];

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
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Explore Cuisines
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Discover the diverse world of culinary delights.
                    </p>
                </div>
            </section>

            {/* Cuisines Grid */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cuisines.map((cuisine) => {
                        const cuisineRestaurants = restaurants.filter(
                            restaurant => restaurant.cuisine.toLowerCase() === cuisine.id
                        );

                        return (
                            <div
                                key={cuisine.id}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={cuisine.image}
                                        alt={cuisine.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <span className="text-3xl mr-2">{cuisine.icon}</span>
                                        <h3 className="text-2xl font-bold">{cuisine.name}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {cuisine.description}
                                    </p>
                                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                                        Featured Restaurants
                                    </h4>
                                    <div className="space-y-4">
                                        {cuisineRestaurants.slice(0, 3).map((restaurant) => (
                                            <div
                                                key={restaurant.id}
                                                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={restaurant.image}
                                                        alt={restaurant.name}
                                                        className="w-12 h-12 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 dark:text-white">
                                                            {restaurant.name}
                                                        </h5>
                                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                            <Star className="h-4 w-4 text-yellow-400" />
                                                            <span>{restaurant.rating}</span>
                                                            <span>•</span>
                                                            <span>{restaurant.deliveryTime}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleAddToCart(restaurant)}
                                                    className="p-2 text-primary hover:text-primary/80 transition-colors duration-300"
                                                >
                                                    <ShoppingCart className="h-5 w-5" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    {cuisineRestaurants.length > 3 && (
                                        <button
                                            onClick={() => navigate(`/restaurants?cuisine=${cuisine.id}`)}
                                            className="w-full mt-4 text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                                        >
                                            View all {cuisineRestaurants.length} restaurants
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Cuisines; 
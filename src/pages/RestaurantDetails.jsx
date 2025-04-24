import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Star, Clock, DollarSign, Heart, ArrowLeft } from 'lucide-react';
import { toggleFavorite } from '../store/slices/restaurantSlice';

const RestaurantDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const restaurant = useSelector(state =>
        state.restaurants.restaurants.find(r => r.id === parseInt(id))
    );

    if (!restaurant) {
        return (
            <div className="container mx-auto px-4 py-8">
                <p>Restaurant not found</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6"
            >
                <ArrowLeft className="h-5 w-5" />
                Back to Restaurants
            </button>

            {/* Restaurant Header */}
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
                        <p className="text-xl mb-4">{restaurant.cuisine}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <Star className="h-5 w-5 text-yellow-400" />
                                <span>{restaurant.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-5 w-5" />
                                <span>{restaurant.deliveryTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <DollarSign className="h-5 w-5" />
                                <span>{restaurant.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => dispatch(toggleFavorite(restaurant.id))}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                    <Heart
                        className={`h-6 w-6 ${restaurant.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                            }`}
                    />
                </button>
            </div>

            {/* Restaurant Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Menu Section */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Menu</h2>
                    <div className="space-y-4">
                        {/* Sample menu items */}
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold mb-2">Butter Chicken</h3>
                            <p className="text-gray-600 mb-2">Tender chicken in a rich, creamy tomato sauce</p>
                            <p className="font-semibold">$12.99</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold mb-2">Naan Bread</h3>
                            <p className="text-gray-600 mb-2">Freshly baked traditional Indian bread</p>
                            <p className="font-semibold">$3.99</p>
                        </div>
                    </div>
                </div>

                {/* Restaurant Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Restaurant Info</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">Hours</h3>
                            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Location</h3>
                            <p>123 Food Street</p>
                            <p>City, State 12345</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Contact</h3>
                            <p>Phone: (555) 123-4567</p>
                            <p>Email: info@restaurant.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails; 
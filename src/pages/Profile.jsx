import { useSelector } from 'react-redux';
import { User, Heart, ShoppingBag, Settings } from 'lucide-react';

const Profile = () => {
    const { restaurants } = useSelector(state => state.restaurants);
    const { items } = useSelector(state => state.cart);

    const favoriteRestaurants = restaurants.filter(restaurant => restaurant.isFavorite);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Profile Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="h-10 w-10 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">John Doe</h1>
                            <p className="text-gray-600">john.doe@example.com</p>
                        </div>
                    </div>
                </div>

                {/* Profile Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Favorites Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="h-5 w-5 text-red-500" />
                            <h2 className="text-xl font-semibold">Favorite Restaurants</h2>
                        </div>
                        <div className="space-y-4">
                            {favoriteRestaurants.map(restaurant => (
                                <div key={restaurant.id} className="flex items-center gap-4 p-3 border rounded-lg">
                                    <img
                                        src={restaurant.image}
                                        alt={restaurant.name}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{restaurant.name}</h3>
                                        <p className="text-gray-600">{restaurant.cuisine}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order History Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <ShoppingBag className="h-5 w-5 text-primary" />
                            <h2 className="text-xl font-semibold">Recent Orders</h2>
                        </div>
                        <div className="space-y-4">
                            {items.map(item => (
                                <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div>
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                                    </div>
                                    <p className="font-semibold">${item.price * item.quantity}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Settings Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Settings className="h-5 w-5 text-primary" />
                            <h2 className="text-xl font-semibold">Account Settings</h2>
                        </div>
                        <div className="space-y-4">
                            <button className="w-full p-3 text-left border rounded-lg hover:bg-gray-50">
                                Edit Profile
                            </button>
                            <button className="w-full p-3 text-left border rounded-lg hover:bg-gray-50">
                                Change Password
                            </button>
                            <button className="w-full p-3 text-left border rounded-lg hover:bg-gray-50">
                                Notification Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile; 
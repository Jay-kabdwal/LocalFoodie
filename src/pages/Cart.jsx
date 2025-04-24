import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items, total } = useSelector(state => state.cart);

    const handleUpdateQuantity = (id, quantity) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleCheckout = () => {
        // Implement checkout logic
        alert('Order placed successfully!');
        dispatch(clearCart());
        navigate('/');
    };

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-gray-600 mb-8">Add some delicious items to your cart!</p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90"
                >
                    Browse Restaurants
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8"
            >
                <ArrowLeft className="h-5 w-5" />
                Back to Restaurants
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                    <div className="space-y-4">
                        {items.map(item => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-lg object-cover"
                                />
                                <div className="flex-grow">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                        className="p-1 rounded-full hover:bg-gray-100"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                        className="p-1 rounded-full hover:bg-gray-100"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Fee</span>
                                <span>$2.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>${(total * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="border-t pt-4">
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>${(total + 2.99 + total * 0.1).toFixed(2)}</span>
                                </div>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 mt-4"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart; 
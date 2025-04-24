import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const Notification = ({ message, type = 'info', onClose, duration = 3000 }) => {
    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const icons = {
        success: <CheckCircle className="h-5 w-5 text-green-500" />,
        error: <AlertCircle className="h-5 w-5 text-red-500" />,
        info: <Info className="h-5 w-5 text-blue-500" />,
    };

    const bgColors = {
        success: 'bg-green-50 border-green-200',
        error: 'bg-red-50 border-red-200',
        info: 'bg-blue-50 border-blue-200',
    };

    return (
        <div
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border ${bgColors[type]} animate-slide-in`}
        >
            <div className="flex items-center gap-3">
                {icons[type]}
                <p className="text-gray-700">{message}</p>
                <button
                    onClick={onClose}
                    className="ml-2 p-1 hover:bg-white/50 rounded-full transition-colors"
                >
                    <X className="h-4 w-4 text-gray-500" />
                </button>
            </div>
        </div>
    );
};

export default Notification; 
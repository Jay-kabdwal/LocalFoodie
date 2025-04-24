import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '../store/slices/notificationSlice';
import Notification from './Notification';

const NotificationContainer = () => {
    const dispatch = useDispatch();
    const notifications = useSelector(state => state.notifications.notifications);

    return (
        <div className="fixed top-4 right-4 z-50 space-y-4">
            {notifications.map(notification => (
                <Notification
                    key={notification.id}
                    message={notification.message}
                    type={notification.type}
                    onClose={() => dispatch(removeNotification(notification.id))}
                    duration={notification.duration}
                />
            ))}
        </div>
    );
};

export default NotificationContainer; 
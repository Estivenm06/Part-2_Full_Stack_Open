/* eslint-disable react/prop-types */
const Notification = ({alert}) => {
    if (!alert || !alert.message || !alert.type) {
        return null; // Return null if alert is not properly defined
    }
    const {message, type} = alert;
    console.log(message);
    console.log(type);
    
    
    return (
        <div className={`${type}`}>
            {message}
        </div>
    );
};

export default Notification;
import React from 'react';
import './Notifications.css';

function Notifications() {
  const notifications = [
    { title: 'Road Repair Scheduled', message: 'Roadwork on Main Street will begin on Monday.', postedBy: 'Municipal Official' },
    { title: 'Water Supply Update', message: 'Water supply will be interrupted from 10 AM - 2 PM on Friday.', postedBy: 'Administrator' },
    { title: 'Community Meeting', message: 'Join us for a town hall meeting this Saturday at 5 PM.', postedBy: 'Municipal Official' },
    { title: 'Garbage Collection Delay', message: 'Garbage collection will be delayed due to maintenance work.', postedBy: 'Municipal Official' },
    { title: 'New Park Opening', message: 'A new park is opening downtown next week. Join the inauguration!', postedBy: 'Administrator' },
    { title: 'Electricity Maintenance', message: 'Power outage expected in Sector 4 from 1 PM - 3 PM tomorrow.', postedBy: 'Municipal Official' },
    { title: 'COVID-19 Vaccination Drive', message: 'Vaccination drive scheduled for this Sunday at the community center.', postedBy: 'Administrator' },
    { title: 'Public Transport Update', message: 'New bus routes will be operational from next Monday.', postedBy: 'Municipal Official' }
  ];

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="notifications-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <strong>{notification.title}</strong>
              <p>{notification.message}</p>
              <small>Posted by: {notification.postedBy}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications available.</p>
      )}
    </div>
  );
}

export default Notifications;

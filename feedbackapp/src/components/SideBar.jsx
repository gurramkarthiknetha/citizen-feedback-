import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function SideBar() {
  return (
    <div className="sidebar-container">
      {/* Top brand/title */}
      <div className="sidebar-header">
        CitizenReport
      </div>

      {/* Navigation Links */}
      <ul className="sidebar-menu">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/reportIssue">Report Issue</Link>
        </li>
        <li>
          <Link to="/complaints">My Complaints</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/posts">Community Issues</Link>
        </li>
      </ul>

      {/* User Info at Bottom */}
      <div className="sidebar-user">
        <div className="user-avatar" />
        <div className="user-info">
          <span className="user-name">User</span>
          <span className="user-email">User@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

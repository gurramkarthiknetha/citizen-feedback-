import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

function RootLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh'}}>
      {/* Sidebar with scrolling */}
      <div style={{ width: '350px', overflowY: 'auto' }}>
        <SideBar />
      </div>

      {/* Main content area */}
      <div style={{ flexGrow: 1, overflowY: 'auto'}}>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;

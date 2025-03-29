import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

function RootLayout() {
  return (
<<<<<<< HEAD
    <div className='d-flex'>
        <div className='' style={{width:'300px'}} >
          <SideBar/>
          </div>
          <div className=''>
          <Outlet/>
          </div>        
=======
    <div style={{ display: 'flex', height: '100vh'}}>
      {/* Sidebar with scrolling */}
      <div style={{ width: '350px', overflowY: 'auto' }}>
        <SideBar />
      </div>

      {/* Main content area */}
      <div style={{ flexGrow: 1, overflowY: 'auto'}}>
        <Outlet />
      </div>
>>>>>>> 46d3461392fb7250fcdacad4621b6a7a2efa89e2
    </div>
  );
}

export default RootLayout;

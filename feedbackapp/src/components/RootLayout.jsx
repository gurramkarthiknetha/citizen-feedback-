import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
<<<<<<< HEAD
    <div style={{ display: 'flex', height: '100vh'}}>
      {/* Sidebar with scrolling */}
      <div style={{ width: '350px', overflowY: 'auto' }}>
        <SideBar />
      </div>

      {/* Main content area */}
      <div style={{ flexGrow: 1, overflowY: 'auto'}}>
        <Outlet />
      </div>
=======
    <div className='d-flex'>
        <div className='' style={{width:'300px'}} >
          <SideBar/>
        </div>
        <div className='flex-grow-1'>
          <Outlet/>
        </div>
>>>>>>> 318c7cbe5b2521f0c8bbb0f2227d9bbea8eded12
    </div>
  );
}

export default RootLayout;

import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className='d-flex'>
        <div className='' style={{width:'300px'}} >
          <SideBar/>
        </div>
        <div className='flex-grow-1'>
          <Outlet/>
        </div>
    </div>
  );
}

export default RootLayout;

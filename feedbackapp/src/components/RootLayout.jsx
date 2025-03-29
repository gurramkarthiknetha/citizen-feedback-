import React from 'react'

import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
function RootLayout() {
  return (
    <div className='d-flex'>
        <div className='' style={{width:'300px'}} >
          <SideBar/>
          </div>
          <div className=''>
          <Outlet/>
          </div>        
    </div>
  )
}

export default RootLayout
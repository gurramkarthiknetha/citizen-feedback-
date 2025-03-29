import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Dashboard from './components/Dashboard'
import ReportIssue from './components/ReportIssue'
import Notifications from './components/Notifications' 
import Settings from './components/Settings' 
import Complaints from './components/Complaints'
import Posts from './components/Posts'
function App() {
  const browserRouterObj = createBrowserRouter([
    {
      element:<RootLayout/>,
      path: '',
      children:[
        {
          element:<Dashboard/>,
          path:''
        },
        {
          element:<ReportIssue/>,
          path:'/reportIssue'
        },
        {
          element:<Notifications/>,
          path:'/notifications'
        },
        {
          element:<Settings/>,
          path:'/settings'
        },
        {
          element:<Complaints/>,
          path:'/complaints'
        },
        {
          element:<Posts/>,
          path:'/posts'
        }
      ]
    }
  ])
  return (
    <div>
        <RouterProvider router={browserRouterObj}/>
    </div>
  )
}

export default App
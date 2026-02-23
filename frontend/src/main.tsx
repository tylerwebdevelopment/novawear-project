import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

// Css Import - Variables.css,Global.css,Colors.css,Utilities.css,Typography.css 
import '@/styles/variables.css';
import '@/styles/global.css';
import '@/styles/colors.css';
import '@/styles/utilities.css';
import '@/styles/typography.css';

// Pages Imports
// Root Layout: Main Layout For Application Including Application, Page wrappers
import RootLayout from '@/pages/layout/RootLayout';
// Home, Dashboard Import
import {Home, Dashboard} from '@/pages';
// Import Auth Pages
import {Login, Register} from '@/pages/Auth';

const ApplicationRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: 'Dashboard',
        element: <Dashboard />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ApplicationRouter} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Timer } from './components/Timer'
import ErrorPage from './components/Error-page'
import About from './components/About'
import Home from './components/Home'
import KonamiComponent from './components/KonamiComponent'
import NightmarishPage from './components/nightmare_ux/NightmarishPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Timer><Home /> </Timer>),
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/konami',
    element: <KonamiComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/ux',
    element: <NightmarishPage />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timer>
    <RouterProvider router={router} />
    </Timer>
    
    
  </React.StrictMode>,
)

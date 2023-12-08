import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ErrorPage from './components/Error-page'
import About from './components/About'
import Home from './components/Home'
import KonamiComponent from './components/KonamiComponent'
import NightmarishPage from './components/nightmare_ux/NightmarishPage'
import MCQ from './components/MCQ/MCQ'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
  },
  {
    path: '/MCQ',
    element: <MCQ />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ErrorPage from './components/Error-page'
import About from './components/About'
import Tetris from './components/Tetris/Tetris'

const router = createBrowserRouter([
  {
    path: '/',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/tetris',
    element: <Tetris />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

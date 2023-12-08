import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Timer } from './components/Timer'
import ErrorPage from './components/Error-page'
import About from './components/About'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Timer><Home /> </Timer>),
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

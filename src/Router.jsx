import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import ErrorPage from './components/Error-page'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import NightmarishPage from './components/nightmare_ux/NightmarishPage'
import MCQ from './components/MCQ/MCQ'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<ErrorPage />} />
            <Route path='/' element={<Header />} >
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/ux' element={<NightmarishPage />} />
                <Route path='/quiz' element={<MCQ />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
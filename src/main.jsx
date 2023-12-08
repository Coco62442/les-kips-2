import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import './assets/font/ChristmasgocDani.ttf'
import './assets/font/Home Christmas.otf'
import './assets/font/NOELAN_1.ttf'
import './assets/font/Playful Christmas-Personal Use.otf'
import './assets/font/PWHappyChristmas.ttf'
import './assets/font/Sweet Vusstain.ttf'

window.localStorage.setItem('compteur', 0);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)

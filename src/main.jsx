import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Backlights from './components/Backlights'
import Create from './components/Create'
import Foglights from './components/Foglights'
import Headlights from './components/Headlights'
import Home from './components/Home'
import Sidelights from './components/Sidelights'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gray-100 max-w-3xl mx-auto my-8 rounded-lg p-4'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headlights' element={<Headlights />} />
          <Route path='/backlights' element={<Backlights />} />
          <Route path='/sidelights' element={<Sidelights />} />
          <Route path='/foglights' element={<Foglights />} />
          <Route path='/create/:type' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='max-w-[1440px] w-11/12 mx-auto'>
  <Home />
  </div>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./assets/global.css";
import Button from './components/Button.jsx';
import StatusCard from './components/StatusCard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <App/>
  </StrictMode>
)

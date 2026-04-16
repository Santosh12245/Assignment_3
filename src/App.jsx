import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import StatusCard from './components/StatusCard'
import NavLink from './components/NavLink'
import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Navbar/>
    <Button/>
    <StatusCard/>
    <Footer/>  
    </>
  )
}

export default App

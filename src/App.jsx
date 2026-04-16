import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Button from './assets/components/Button'
import StatusCard from './assets/components/StatusCard'
import NavLink from './assets/components/NavLink'
import Navbar from './assets/components/Navbar'



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

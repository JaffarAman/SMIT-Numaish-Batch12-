import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserProfile from './pages/userProfile'
import ProductPage from './pages/ProductPage'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>

        {/* Basic routing */}
        <Route path='/' element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/*  */}


        {/* <Route path='/user/:id'  element={<UserProfile />} /> */}

      <Route  path="/product" element={<ProductPage />} />
      <Route  path="/productdetails/:id" element={<ProductDetails />} />




      </Routes>
      <h1>FOOTER</h1>
    </>
  )
}


const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}

      <h1>HOME PAGE</h1>
    </>
  )
}


const AboutPage = () => {
  return (
    <>
      {/* <Navbar /> */}

      <h1>About PAGE</h1>
    </>
  )
}

const ContactPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <h1>Contact PAGE</h1>
    </>
  )
}


export default App

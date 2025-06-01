import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserProfile from './pages/userProfile'
import ProductPage from './pages/ProductPage'
import ProductDetails from './pages/ProductDetails'
import UserPage from './pages/UserPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>

        <Route index element={<HomePage  />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />


        {/* <Route path="/product" element={<ProductPage />} /> */}
        {/* <Route path="/productdetails/:id" element={<ProductDetails />} /> */}

        <Route path="/user" element={<UserPage />} />



        {/* Nested Routes */}
        <Route path='/product/' >
          <Route index element={<ProductPage />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path="sale11/new" element={<ProductPage />} />
          <Route path="offer" element={<ProductPage />} />
        </Route>








      </Routes>

    </>
  )
}


// const HomePage = () => {
//   return (
//     <>
//       {/* <Navbar /> */}

//       <h1>HOME PAGE</h1>
//     </>
//   )
// }


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

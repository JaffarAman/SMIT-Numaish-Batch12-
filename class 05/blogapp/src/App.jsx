import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Bounce, ToastContainer } from 'react-toastify'
import BlogPage from './pages/blogPage'
import MyBlogPage from './pages/MyBlogPage'
import CreateBlogPage from './pages/CreateBlogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/myblog' element={<MyBlogPage />} />
        <Route path='/createblog' element={<CreateBlogPage />} />
      </Routes>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

    </>
  )
}

export default App

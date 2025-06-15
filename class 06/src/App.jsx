import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet, Route, Routes } from 'react-router-dom'
// import Login from './pages/auth/Login'
// import Signup from './pages/auth/Signup'
import { Bounce, ToastContainer } from 'react-toastify'
// import BlogPage from './pages/blog/BlogPage'
// import MyBlogPage from './pages/blog/MyBlogPage'
// import CreateBlogPage from './pages/blog/CreateBlogPage'
import PrivateRoute from './routes/PrivateRoute'
import AuthRoute from './routes/AuthRoute'
import { BlogPage, CreateBlogPage, Login, MyBlogPage, Signup } from './pages'

import styles from "./pages/auth/style.module.css"
// console.log("styles", styles.heading)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className={styles.heading}  >HELLO</h1>
      <Routes>


        <Route element={<AuthRoute />} >
          <Route index element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Route>






        {/*  */}
        {/* <Route element={<TestingPage />} >
          <Route path='/child' element={<ChildCmp />} />
          <Route path='/child2' element={<ChildCmp2 />} />
        </Route> */}

        <Route element={<PrivateRoute />} >
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/myblog' element={<MyBlogPage />} />
          <Route path='/createblog' element={<CreateBlogPage />} />
        </Route>


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



const TestingPage = () => {
  return (
    <>
      <h1>TestingPage</h1>
      <Outlet />
    </>
  )
}



const ChildCmp = () => {
  return (
    <h1>ChildCmp</h1>
  )
}

const ChildCmp2 = () => {
  return (
    <h1>ChildCmp2</h1>
  )
}

export default App

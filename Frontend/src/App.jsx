// import React from 'react'
// import HomePage from './pages/HomePage.jsx'
// import LoginForm from './components/LoginForm.jsx'
// import AuthPage from './pages/AuthPage.jsx'
// import { Outlet } from '@tanstack/react-router'
// import NavBar from './components/NavBar.jsx'

// const App = () => {
//   return (
//    <>
//    <NavBar/>
//     <Outlet/>
//    </>
//   )
// }

// export default App



import React from 'react'
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
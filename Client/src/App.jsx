import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./app.css"
import Header from "./common/Header/Header"
import Footer from "./common/Footer/Footer"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Fature from "./pages/fature/Fature"
import Login from "./pages/login/Login"
import Signup from "./pages/sign-up/Signup"
import { useState } from "react"
import { Toaster } from "react-hot-toast"

const App = () => {
  const [user, setLoginUser] = useState({})
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />}></Route>
          <Route path="/about" element={user && user._id ? <About/> : <Login setLoginUser={setLoginUser}/> }> </Route>
          <Route path="/fature" element={user && user._id ? <Fature/> : <Login setLoginUser={setLoginUser}/> }></Route>
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          
        </Routes>

        <Footer />
      </Router>
    <Toaster/>
    </>
  )
}

export default App

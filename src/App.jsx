import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Cart from "./pages/Cart"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { useEffect, useState } from "react"
import { auth } from "./firebase/firebase-config"
import { onAuthStateChanged } from "firebase/auth"
import Checkout from "./pages/Checkout"
import Loader from "./components/Loader"

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(null)
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setIsAuthenticated(!!user)
      setLoading(false)
    })
    return () => unsubscribe()
  },[])
  if(loading){
    return (
      <Loader/>
    );
  }
  return (
       <BrowserRouter>
        <Routes>
          <Route exact path="/" element={isAuthenticated ? <Home/>: <Navigate to= '/login'/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route/>
        </Routes>
       </BrowserRouter>
  )
}

export default App

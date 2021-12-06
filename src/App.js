import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import {Grid} from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Screens/Home/Home'
import Footer from './components/Footer/Footer'
import OneProduct from './components/Screens/oneProduct/OneProduct'


const App = () => {
  return (
    <div>
    <Navbar/>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<OneProduct />} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    
  )
}

export default App

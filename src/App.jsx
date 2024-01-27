import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import ShopeCategory from './Pages/ShopeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import airbuds_banner from './Components/Assets/airbuds_banner.webp'
import neckband_banner from './Components/Assets/neckband_banner.webp'
import trimmer_banner from './Components/Assets/trimmer_banner.webp'

function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/airbuds' element={<ShopeCategory banner={airbuds_banner} category="airbuds"/>}/>
        <Route path='/neckband' element={<ShopeCategory banner={neckband_banner} category="neckband"/>}/>
        <Route path='/trimmer' element={<ShopeCategory banner={trimmer_banner} category="trimmer"/>}/>
        <Route path="/product" element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import "../App.css"
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'
import Contact from '../screens/Contact';
import About from '../screens/About';
import Shop from '../screens/Shop';
import Product1 from '../screens/Product1';
import Product2 from '../screens/Product2';
import Product3 from '../screens/Product3';
import Product4 from '../screens/Product4';
import Home from '../screens/Home';

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <h4 className='h4'>Nested Routing</h4>
          <ul>
            <li className='li'>
              <Link className='link' to="/">Home</Link>
              <Link className='link' to="shop">Shop</Link>
              <Link className='link' to="about">About</Link>
              <Link className='link' to="contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop/' element={<Shop />}>
            <Route path='product1' element={<Product1 />} />
            <Route path='product2' element={<Product2 />} />
            <Route path='product3' element={<Product3 />} />
            <Route path='product4' element={<Product4 />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;
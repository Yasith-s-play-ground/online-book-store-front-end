import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';

import Layout from './components/Layout';
import Watchlist from './pages/Watchlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermCondition from './pages/TermCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProtectedRoute from './utils/ProtectedRoute';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectedRoute/>}>

        <Route path="/" element={<Layout />}>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='store' element={<Store />} />
          <Route path='watchlist' element={<Watchlist />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='shipping-policy' element={<ShippingPolicy />} />
          <Route path='term-condition' element={<TermCondition />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>

        </Route>
        
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        </Route>
        
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword />} />
      
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

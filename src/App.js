import './App.css';
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './page/Cart';
import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import Wishlist from './page/Wishlist';
import BillingDetails from './page/BillingDetails';
import Account from './page/Account';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/billingdetails" element={<BillingDetails />} />
        <Route path="/useraccount" element={<Account />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

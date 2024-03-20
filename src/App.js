import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './page/Cart';
import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import Wishlist from './page/Wishlist';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Signup/> */}
      {/* <Wishlist /> */}
      <Cart/>
      <Footer />
    </>
  );
}

export default App;

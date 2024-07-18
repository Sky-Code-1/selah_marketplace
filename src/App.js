import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Home from './pages/Home';
import Footer from './components/Footer';
import SelectedProduct from './pages/SelectedProduct';
import WishList from './pages/WishList';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import AddProduct from './pages/AddProduct';
import Messages from './pages/Messages';
import Cart from './pages/Cart';
import AddStore from './pages/AddStore';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <>
        <Header />
        <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<SelectedProduct />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/add/product' element={<AddProduct />} />
            <Route path='/add/store' element={<AddStore />} />
            <Route path="/messages" element={<Messages />} />
            <Route path='/cart' element={<Cart /> } />
            <Route path='/*' element={<ErrorPage />} />
        </Routes> 
        </main>
        <Footer /> 
    </>
  );
}

export default App;

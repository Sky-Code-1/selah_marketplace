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
        </Routes>  
      </main>
      <Footer />
    </>
  );
}

export default App;

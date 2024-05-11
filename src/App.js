import { RouterProvider, createBrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product'
import AddProduct from './pages/AddProduct';

function App() {

  return (
    <div className="App">
      <header>
        Header of application.
      </header>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/products/*' element={<Product />} />
      </Routes>
      <footer>Footer Of Application</footer>
    </div>
  );
}

export default App;

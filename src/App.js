import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Home from './pages/Home';
import Footer from './components/Footer';
import SelectedProduct from './components/SelectedProduct';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<SelectedProduct />} />
        </Routes>  
      </main>
      <Footer />
    </>
  );
}

export default App;

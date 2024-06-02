import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>  
      </main>
      <Footer />
    </>
  );
}

export default App;

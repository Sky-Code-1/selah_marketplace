import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Register from './pages/Register';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <Product />
  },
  {
    path: '/products/add',
    element: <AddProduct />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);


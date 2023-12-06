import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About from "./views/About/About";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import Booking from "./views/Booking/Booking";
import OrderBy from "./views/OrderBy/OrderBy";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminLogin from './views/AdminLogin/AdminLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/signup',
    element: <SignUp />,
  },

  {
    path:'/adminlogin',
    element:<AdminLogin/>
  },

  {
    path: '/booking/:id',
    element: <Booking />
  },
  {
    path: '/orderby',
    element: <OrderBy />
  }

])

root.render(
  <RouterProvider router={router} />
);



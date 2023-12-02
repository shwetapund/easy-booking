import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About from "./views/About/About";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import Booking from "./views/Booking/Booking";
import OrderBy from "./views/OrderBy/OrderBy";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
    path: '/booking',
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



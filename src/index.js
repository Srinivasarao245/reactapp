import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Component/Home';
import Price from './Component/Price';
import Aboutus from './Component/Aboutus';
import Features from './Component/Features';
import Faqs from './Component/Faqs';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/price",
        element:<Price></Price>
      },
      {
        path:"/aboutus",
        element:<Aboutus></Aboutus>
      },
      {
        path:"/feature",
        element:<Features></Features>
      },
      {
        path:"/faqs",
        element:<Faqs></Faqs>
      }
    ]
  }  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

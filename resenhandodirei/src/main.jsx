import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.tsx';
import './index.css';
//  import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './About.tsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
        path: "/about",
        element: <About />
    }
  ])
  
  
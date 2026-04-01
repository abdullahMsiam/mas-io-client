import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/home/Home.jsx';
import AllApps from './components/allApps/AllApps.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () => fetch('/apps.json').then(res => res.json()),
        element: <Home />
      },
      {
        path: "all-apps",
        loader: () => fetch('/apps.json').then(res => res.json()),
        element: <AllApps />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

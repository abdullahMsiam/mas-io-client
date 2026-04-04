import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/home/Home.jsx';
import AllApps from './components/allApps/AllApps.jsx';
import AppDetails from './components/app-details/AppDetails.jsx';
import NotFoundPage from './components/utility/NotFoundPage.jsx';

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
        index: false,
        path: "all-apps",
        loader: () => fetch('/apps.json').then(res => res.json()),
        element: <AllApps />
      }, 
      {
        path: "app-details/:id",
        loader: ({ params }) => fetch('/apps.json').then(res => res.json()).then(apps =>{
          
          const app = apps.find(app => app.id == params.id);
          return app;
        }),
        element: <AppDetails />
      }, 
      {
        index: false,
        path: "*",
        element: <NotFoundPage/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

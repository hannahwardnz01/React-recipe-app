import { createRoot } from 'react-dom/client';
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App"
import Recipe from "./pages/Recipe"


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "recipe/:contactId",
        element: <Recipe />,
    },
  ]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);


import { createRoot } from 'react-dom/client';
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home"
import Recipe, {
  loader as recipeLoader,
}  from "./routes/Recipe"
import ErrorPage from './error-page';
import Edit from "./routes/Edit"


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "recipe/:id",
      element: <Recipe/>,
      loader: recipeLoader,
    },
    {
      path: "/add",
      element: <Edit/>,
    },
  ]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);

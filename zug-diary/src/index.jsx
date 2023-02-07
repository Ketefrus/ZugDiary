import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Root from './components/root';
import {routes} from './routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import NavBar from "./components/navbar";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
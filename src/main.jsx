// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HeroSection from "./assets/Pages/Herosection";
// import Yls from "./assets/Pages/yls";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HeroSection />,
//   },
//   {
//     path: "youth",
//     element: <Yls />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

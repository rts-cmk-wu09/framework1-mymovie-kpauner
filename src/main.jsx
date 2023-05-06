import React from "react";
import ReactDOM from "react-dom/client";
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route } from "react-router-dom";
import App from "./App";
import DetailView from "./pages/DetailView";
import ListView from "./pages/ListView";
import ErrorView from "./pages/ErrorView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index element={<ListView />} />
      <Route path="/details" element={<DetailView />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

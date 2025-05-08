import React from "react";
import Login from "./pages/login.jsx";
import Sellerpage from "./pages/sellerpage.jsx";
import Buyerpage from "./pages/buyerpage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotfoundPage from "./pages/NotfoundPage.jsx";
import Hero from "./pages/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
    errorElement: <NotfoundPage />,
  },
  {
    path: "/login",
    
    element: <Login />,
  },
  
  {
    path: "/auth/buyer",
    element: <Buyerpage />,
  },
  {
    path: "/auth/seller",
    element: <Sellerpage />,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

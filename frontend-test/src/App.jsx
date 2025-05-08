import React from "react";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Sellerpage from "./pages/sellerpage.jsx";
import Buyerpage from "./pages/buyerpage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotfoundPage from "./pages/NotfoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotfoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
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

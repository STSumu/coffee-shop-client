import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Home from "./components/Home.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import SignUp from "./components/authentication/SignUp.jsx";
import SignIn from "./components/authentication/SignIn.jsx";
import AuthLayout from "./components/authentication/AuthLayout.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./components/Users.jsx";
import UserUpdate from "./components/UserUpdate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:'/coffee/:id',
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:5000/users')
      },
      {
        path:'/updateUser/:id',
        element:<UserUpdate></UserUpdate>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      }
    ],
  },
  {
    path:'auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/signUp',
        element:<SignUp></SignUp>,
      },
      {
        path:'/auth/SignIn',
        element:<SignIn></SignIn>,
      }
    ]
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Secrit from "../Pages/Shared/Secret/Secrit";
import PriveteRoute from "./PriveteRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/' ,
        element:<Home></Home>  
      },
      {
        path: '/menu' ,
        element: <Menu></Menu>
      },
      {
        path: '/order/:category' ,
        element: <Order></Order>,
      },
      {
        path: '/login' ,
        element: <Login></Login>,
      },
      {
        path: '/singup' ,
        element: <SingUp></SingUp>,
      },
      {
        path: '/secret' ,
        element: <PriveteRoute>
          <Secrit></Secrit>
        </PriveteRoute>,
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PriveteRoute>
      <Dashboard></Dashboard>
    </PriveteRoute>,
    children:[
    { 
      path: 'cart',
      element: <Cart></Cart>
    },

    // admin routes
    {
      path: 'users',
      element: <AllUsers></AllUsers>
    },


    ]
  }
]);

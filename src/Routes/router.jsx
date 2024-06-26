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
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import PayMent from "../Pages/Dashboard/Payment/PayMent";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/secret",
        element: (
          <PriveteRoute>
            <Secrit></Secrit>
          </PriveteRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PriveteRoute>
        <Dashboard></Dashboard>
      </PriveteRoute>
    ),
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: 'payment',
        element: <PayMent></PayMent>
      },
      {
        path:'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      // admin routes
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoutes>
            <ManageItems></ManageItems>
          </AdminRoutes>
        ),
      },

      {
        path: "updateItem/:id",
        element: <AdminRoutes>
          <UpdateItem></UpdateItem>
        </AdminRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

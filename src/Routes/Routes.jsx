
import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRout from "./PrivateRout";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        
        {
            path:'/checkout/:id',
            element:<PrivateRout><Checkout></Checkout></PrivateRout>,
            loader: ({params})=>fetch(`https://y-pearl-three.vercel.app/services/${params.id}`)
        },
        {
            path:'/bookings',
            element:<PrivateRout><Bookings></Bookings></PrivateRout>
        }
      ]
    },
  ]);
  export default router;
  
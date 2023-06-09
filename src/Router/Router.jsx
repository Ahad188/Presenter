import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instractor/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../LayOut/Dashboard";
import Myclass from "../Pages/Dasboard/Myclass/Myclass";
import Allusers from "../Pages/Dasboard/Allusers/Allusers";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dasboard/AddClass/AddClass";
import ManegeClass from "../Pages/Dasboard/ManegeClass/ManegeClass";
import Payment from "../Pages/Dasboard/Payment/Payment";
 

const router = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout/>,
       children:[
          {
               path:'/',
               element:<Home/>,
          },
          {
               path:'instructors',
               element:<Instructors/>
          },
          {
               path:'classes',
               element:<PrivateRoute><Classes/></PrivateRoute>,
          },
          {
               path:'login',
               element: <Login/>
          },
          {
               path:'register',
               element:<Register/>
          },
          
       ]
     },
     {
          path:'dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children:[
               {
                    path:'my-class',
                    element:<Myclass/>
               },
               {
                    path:'payment',
                    element:<Payment></Payment>
               },
               {
                    path:'allusers',
                    element:<AdminRoute><Allusers/></AdminRoute>,
               },
               {
                    path:'addclass',
                    element:<AdminRoute><AddClass/></AdminRoute>
               },
               {
                    path:'manege-class',
                    element:<AdminRoute><ManegeClass/></AdminRoute>
               }
          ]
     }
   ]);

   export default router;
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
import AddTeacher from "../Pages/Dasboard/AddTeacher/AddTeacher";
import ManegeTeacher from "../Pages/Dasboard/ManegTeacher/ManegeTeacher";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardHome from "../Pages/Dasboard/DashboardHome/DashboardHome";
 

const router = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout/>,
       errorElement:<ErrorPage/>,
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
                    path:'dashHome',
                    element:<DashboardHome/>
               },
               {
                    path:'my-class',
                    element:<Myclass/>
               },
               {
                    path:'payment',
                    element:<Payment></Payment>
               },
               {
                    path:'all-users',
                    element:<AdminRoute><Allusers/></AdminRoute>,
               },
               {
                    path:'add-class',
                    element:<AdminRoute><AddClass/></AdminRoute>
               },
               {
                    path:'manege-class',
                    element:<AdminRoute><ManegeClass/></AdminRoute>
               },
               {
                    path:'add-teacher',
                    element:<AdminRoute><AddTeacher/></AdminRoute>
               },
               {
                    path:'manege-teacher',
                    element:<AdminRoute><ManegeTeacher/></AdminRoute>
               }
          ]
     }
   ]);

   export default router;
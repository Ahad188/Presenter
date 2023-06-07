import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instractor/Instructors";
import Classes from "../Pages/Classes/Classes";
 

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
               element:<Classes/>
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
   ]);

   export default router;
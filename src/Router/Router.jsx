import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
               path:'login',
               element: <Login/>
          },
          {
               path:'register',
               element:<Register/>
          }
       ]
     },
   ]);

   export default router;
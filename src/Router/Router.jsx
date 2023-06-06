import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout/>,
       children:[
          {
               path:'/',
               element:<Home/>,
          }
       ]
     },
   ]);

   export default router;
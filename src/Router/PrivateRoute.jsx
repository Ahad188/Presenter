import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import { HashLoader } from "react-spinners";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
 

const PrivateRoute = ({children}) => {
     // const {user,loading } = useAuth();
     const {user ,loading} = useContext(AuthContext)
     const location = useLocation();

     if(loading){
          return  <div  className='
          h-[100vh]
          flex 
          flex-col 
          justify-center 
          items-center 
        '>
               <HashLoader color="#36d7b7" />
          </div>
     }


     if(user){
          return children;
     }




     return <Navigate to="/login" state={{from: location}} replace></Navigate>;


};

export default PrivateRoute;
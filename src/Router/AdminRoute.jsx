import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { HashLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
 

const AdminRoute = ({children}) => {
     const {user,loading } = useAuth();
     const location = useLocation();
     const [isAdmin,isAdminLoading] = useAdmin()

     if(loading || isAdminLoading){
          return  <HashLoader color="#36d7b7" />
     }


     if(user || isAdmin){
          return children;
     }




     return <Navigate to="/login" state={{from: location}} replace></Navigate>;


};

export default  AdminRoute;
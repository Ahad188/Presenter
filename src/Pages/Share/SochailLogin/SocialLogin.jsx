 
 import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
 
 const SocialLogin = () => {
     const {googleSingIn} = useAuth()

     const navigate = useNavigate();
     const location = useLocation();
 
     const from = location.state?.from?.pathname || "/";

     const handelGoogleSingIn = ()=>{
          googleSingIn()
          .then(result =>{
               const logGoogleUser = result.user;
               console.log(logGoogleUser);
               navigate(from, { replace: true });
          })
     }
     return (
          <div className="text-center my-4">
      <div className="divider"></div>
      <button onClick={handelGoogleSingIn} className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
    </div>
     );
 };
 
 export default SocialLogin;
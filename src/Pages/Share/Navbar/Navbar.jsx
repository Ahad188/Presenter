import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
     const {user} = useContext(AuthContext)
     console.log(user);
     const navOptions = <>
         <li><Link className="text-xl" to="/">Home</Link></li>
        <li><Link className="text-xl" to="/instructors">Instructors</Link></li>
        <li><Link className="text-xl" to="/classes">Classes</Link></li>
        <li><Link className="text-xl" to="/login">Login</Link></li>
       
        
        
         
    </>
  return (
     <div className="navbar font-bold  bg-opacity-30 max-w-screen-xl bg-black text-[#2e9cf0]">
              <div className="navbar-start">
                  <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                          {navOptions}
                      </ul>
                  </div>
                  <a className="btn btn-ghost normal-case text-xl"> 
                  <img src={logo} className="h-10 w-10 rounded-full" alt="" />
                  </a>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                      {navOptions}
                  </ul>
              </div>
              <div className="navbar-end">
                  <a className="btn">Get started</a>
              </div>
          </div>
  );
};

export default Navbar;

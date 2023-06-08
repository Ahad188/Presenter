import { Link, NavLink, Outlet } from "react-router-dom";

 

const Dashboard = () => {
     return (
          <div className="drawer lg:drawer-open bg-[#afe1f1]">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full text-base-content bg-red-300">
      {/* Sidebar content here */}
      <li><Link className="text-2xl" to='/dashboard/my-class'>My-class</Link></li>
      <li><Link className="text-2xl">Payment</Link></li>
      <li><Link className="text-2xl">History</Link></li>
      <div className="divider"></div>
      <li><Link className="text-2xl" to="/"> Home</Link> </li>
      <li><Link className="text-2xl" to="/classes"> Classes</Link></li>
      <li><Link className="text-2xl" to="/instructors">Instructors</Link></li>
    </ul>
  
  </div>
</div>
     );
};

export default Dashboard;
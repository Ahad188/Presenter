import Lottie from "lottie-react";
import dash from '../../../../public/81248-watch-computer-animation.json'
import { Helmet } from "react-helmet-async";
const DashboardHome = () => {
     return (
          <>
          <Helmet>
            <title>Presenter /Dashboard Home</title>
          </Helmet>
          <div className="w-full p-5">
               
               <Lottie size={400} animationData={dash}  />
          </div>
          </>
     );
};

export default DashboardHome;
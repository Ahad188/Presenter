import Lottie from "lottie-react";
import dash from '../../../../public/81248-watch-computer-animation.json'
const DashboardHome = () => {
     return (
          <div className="w-full p-5">
               
               <Lottie size={400} animationData={dash}  />
          </div>
     );
};

export default DashboardHome;
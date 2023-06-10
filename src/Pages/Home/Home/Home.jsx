import Banner from "../Banner/Banner";
import Contact from "../Contact/contact";
import PopularClass from "../PopularClass/PopularClass";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
import Slider from "../Slider/Slider";
import Subservice from "../SubServices/Subservice";

 

const Home = () => {
     return (
          <div className="mt-5">
               <Banner/>
                
               <PopularClass/>
               <Slider/>
               <PopularTeacher/>
               <Subservice/>
               <Contact/>
          </div>
     );
};

export default Home;
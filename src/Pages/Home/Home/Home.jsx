import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularTeacher from "../PopularTeacher/PopularTeacher";

 

const Home = () => {
     return (
          <div className="mt-5">
               <Banner/>
                
               <PopularClass/>
               <PopularTeacher/>
          </div>
     );
};

export default Home;
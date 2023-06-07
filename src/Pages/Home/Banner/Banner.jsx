 import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
  return (
    <div
      className="hero min-h-[600px] banner"  
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold ml-1 ">Hello Students</h1>
          <p className="mb-5 text-2xl text-[#e2e9ee]">
          An extracurricular activity can be almost anything that isn't required for high school credit or paid employment that you do while you're in high school. These activities will become very important later, such as when you are applying to colleges, because they help you develop your talents, interests, and passions. They can also teach you practical skills like time management.
          </p>
          <button className="btn  ">
               <Link to='/classes'>Get Started</Link>
               </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

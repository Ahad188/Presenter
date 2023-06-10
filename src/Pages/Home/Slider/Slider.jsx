import img from "../../../assets/slider/img.jpg";
import img2 from "../../../assets/slider/img (2).jpg";
import img3 from "../../../assets/slider/img (3).jpg";
import img4 from "../../../assets/slider/img (4).jpg";
import img5 from "../../../assets/slider/img (5).jpg";

const Slider = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold my-10">There are Some Motivation</h2>
      {/* <div className="carousel rounded-box">
               <div className="carousel-item">
               <img className='h-[300px] w-[300px]' src={img} alt="Burger" />
               </div> 
               <div className="carousel-item">
               <img className='h-[300px] w-[300px]' src={img2} alt="Burger" />
               </div> 
               <div className="carousel-item">
               <img className='h-[300px] w-[300px]' src={img3} alt="Burger" />
               </div> 
               <div className="carousel-item">
               <img className='h-[300px] w-[300px]' src={img4} alt="Burger" />
               </div> 
               <div className="carousel-item">
               <img className='h-[300px] w-[300px]' src={img5} alt="Burger" />
               </div> 
               
          </div> */}

      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

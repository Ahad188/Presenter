import img1 from '../../../assets/Subservice/brush.svg'
import img2 from '../../../assets/Subservice/contact.svg'
import img3 from '../../../assets/Subservice/anchor.svg'

const Subservice = () => {
     return (
          <section className=" my-20 mb-10">
               <h1 className='text-4xl font-bold'>Some  Advice</h1>
          <div className="md:grid grid-cols-3 gap-5 mt-10">
               <div className="hover:border-[#6ff0f0] hover:-skew-y-2 p-10 border-[#2e9cf0]   border-b-4 w-96">
                    <div className="h-40 w-40 p-10 ml-20">
                         <img src= {img1} alt=""/>
                    </div>
                    <h3>Never Give Up</h3>
                    
               </div>
               <div className="hover:border-[#6ff0f0] hover:-skew-y-2 p-10 border-[#2e9cf0]   border-b-4 w-96">
                    <div className="h-40 w-40 p-10 ml-20">
                         <img src={img2} alt=""/>
                    </div>
                    <h3>Donot stop Learn</h3>
                    
               </div>
               <div className="hover:border-[#6ff0f0] hover:-skew-y-2 p-10 border-[#2e9cf0]   border-b-4 w-96">
                    <div className="h-4- w-40 p-10 ml-20">
                         <img src= {img3} alt=""/>
                    </div>
                    <h3>Work Heard</h3>
                     
               </div>
          </div>
     </section>
     );
};

export default Subservice;
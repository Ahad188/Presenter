import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";

 

const PopularClass = () => {
     const [datas, setData] = useState();
// console.log(datas);
     useEffect(()=>{
          fetch('../../../../public/Class.json')
          .then(res=>res.json())
          .then(data=>  {
               
               setData(data)
          })

     },[])
     return (
          <>
          <h2 className="text-center text-4xl font-bold mt-9">There is a Popular class </h2>
           
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {
                    datas?.slice(0,6).map(((data)=> <PopularCard key={data.id} data={data}></PopularCard>))
                }
          </div>
          
          </>
          
     );
};

export default PopularClass;
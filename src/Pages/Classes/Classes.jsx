import { useEffect, useState } from "react";
import PopularCard from "../Home/PopularClass/PopularCard";

 

const Classes = () => {
     const [ classes , setClasses] = useState()
     useEffect(()=>{
          fetch('../../../public/Class.json')
          .then(res=>res.json())
          .then(data => {
               setClasses(data)
          })
     },[])
     return (
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
              
              {
               classes?.map(data => <PopularCard
               key={data.id}
               data={data}
               ></PopularCard> )
              }
          </div>
     );
};

export default Classes;
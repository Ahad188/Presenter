// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PopularCard from "./PopularCard";

 

const PopularClass = () => {
//      const [datas, setData] = useState();
// // console.log(datas);
//      useEffect(()=>{
//           fetch('../../../../public/Class.json')
//           .then(res=>res.json())
//           .then(data=>  {
               
//                setData(data)
//           })

//      },[])

     const { refetch,data: datas =[]} = useQuery({
          queryKey: ['classes'],
          queryFn: async ()=>{
               const res = await fetch('http://localhost:5000/classes')
               return res.json()
          }
     })
     return (
          <>
          <h2 className="text-center text-4xl font-bold mt-9">There is a Popular class </h2>
           
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {
                    datas?.slice(0,6).map(((data)=> <PopularCard 
                    key={data._id} 
                    data={data}
                    refech={refetch}
                    ></PopularCard>))
                }
          </div>
          
          </>
          
     );
};

export default PopularClass;
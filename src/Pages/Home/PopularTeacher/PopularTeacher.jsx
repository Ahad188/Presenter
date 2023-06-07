import { useEffect, useState } from "react";
 
import TeacherCard from "./TeacherCard";

 

const PopularTeacher = () => {
const [teachers, setTeacher] = useState()
     useEffect(()=>{
          fetch('../../../../public/teacher.json')
          .then (res=>res.json())
          .then(data=>setTeacher(data))
     },[])
     // console.log(teachers);
     return (
          <>
           <h2 className="text-center text-4xl font-bold mt-9">There is a Popular Teacher </h2>

           <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {
                    teachers?.slice(0,6).map(teacher=><TeacherCard key={teacher.id} teacher={teacher}/>)
                }
          </div>
               
          </>
     );
};

export default PopularTeacher;
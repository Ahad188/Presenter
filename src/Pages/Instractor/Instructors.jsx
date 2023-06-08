import { useEffect, useState } from "react";
import TeacherCard from "../Home/PopularTeacher/TeacherCard";
import AllTeacher from "../../Component/AllTeacher";
import { useQuery } from "@tanstack/react-query";
 
 

 
 
 const Instructors = () => {
       
     const {data: teacher=[]} = useQuery({
          queryKey:['classes'],
          queryFn: async ()=>{
               const  res = await fetch('http://localhost:5000/classes')
               return res.json()
          }
     })
     return (
        <>
         
        {
          teacher?.map(teacher=> <AllTeacher
          key={teacher._id}
          teacher={teacher}
          ></AllTeacher>)
        }
        
        
        </>
     );
 };
 
 export default Instructors;
import { useEffect, useState } from "react";
import TeacherCard from "../Home/PopularTeacher/TeacherCard";
import AllTeacher from "../../Component/AllTeacher";
 
 

 
 
 const Instructors = () => {
      const [ teacher, setTechier] = useState()
     useEffect(() => {
       fetch("../../../public/teacher.json")
         .then((res) => res.json())
         .then((data) => {
          //  console.log(data);
           setTechier(data)
         });
     }, []);
     console.log(teacher);
     return (
        <>
         
        {
          teacher?.map(teacher=> <AllTeacher
          key={teacher.id}
          teacher={teacher}
          ></AllTeacher>)
        }
        
        
        </>
     );
 };
 
 export default Instructors;
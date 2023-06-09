
import AllTeacher from "../../Component/AllTeacher";
import { useQuery } from "@tanstack/react-query";
 
 

 
 
 const Instructors = () => {
       
     const {data: teacher=[]} = useQuery({
          queryKey:['teachers'],
          queryFn: async ()=>{
               const  res = await fetch('http://localhost:5000/teachers')
               return res.json()
          }
     })
     // console.log(teacher);
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
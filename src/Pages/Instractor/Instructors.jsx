import { useEffect, useState } from "react";
 
 

 
 
 const Instructors = () => {
     const [men, setTeacher] = useState();
     useEffect(() => {
       fetch("../../../public/teacher.json")
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           setTeacher(data);
         });
     }, []);
     return (
        <>
        
        hello
        
        
        
        </>
     );
 };
 
 export default Instructors;
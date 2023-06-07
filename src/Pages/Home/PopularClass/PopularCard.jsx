import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useClass from "../../../hooks/useClass";

const PopularCard = ({data} ) => {
     const navigate = useNavigate();
     const location = useLocation();
     const [ ,refetch ] = useClass();
//   console.log(data);
  const { image, studentCount, subject, description, price, _id } = data;
  console.log(_id);
     const {user} = useAuth();
     const handelCard = data =>{
          console.log( data);
     if(user && user?.email){
           const itemclass = {classId: _id,image,   subject, price,   email :user?.email}
          fetch('http://localhost:5000/my-class',{
               method:"POST",
               headers:{
                    "content-type" : "application/json"
               },
               body: JSON.stringify(itemclass)
          })
          .then(res=>res.json())
          .then(data=>{
               if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' class added my class',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
          })
     }
     else{
          Swal.fire({
               title: 'Please login to Join the class',
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Login now!'
             }).then((result) => {
               if (result.isConfirmed) {
                 navigate('/login', {state: {from: location}})
               }
             })
     }
}



  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-[250px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{subject}</h2>
        <p>{description}</p>
        <p>Price : $ {price}</p>
        <p> set Available : {studentCount}</p>
        <div className="card-actions">
          <button className="btn" onClick={()=>handelCard(data)}>Join to Class</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;

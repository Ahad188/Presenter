import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import SocialLogin from "../Share/SochailLogin/SocialLogin";
import Swal from "sweetalert2";

 

const Register = () => {
     const [show, setShow] = useState(false)
     const {createUser,updateUserProfile} = useAuth()
     const { register, handleSubmit,reset } = useForm();
     const navigate = useNavigate();

     const onSubmit = (data) => {
          console.log(data)
          createUser(data.email,data.password)
          .then(result =>{
               const user = result.user;
               console.log(user);
               updateUserProfile(data.name, data.photoURL)
               .then(()=>{
                    console.log('userProfile is update');
                    const saveUser = {name: data.name, email:data.email}
                    fetch('http://localhost:5000/users',{
                         method:"POST",
                         headers:{"content-type":"application/json"},
                         body: JSON.stringify(saveUser)
                       })
                       .then(res=>res.json())
                       .then(data=>{
                         if(data.insertedId){
                              reset();
                              Swal.fire({
                                  position: 'top-end',
                                  icon: 'success',
                                  title: 'User created successfully.',
                                  showConfirmButton: false,
                                  timer: 1500
                              });
                              navigate('/');
                         }
                       })
               })
               .catch(error => console.log(error))
          })

     
     };
     return (
          <>
          <form onSubmit={handleSubmit(onSubmit)}>
              <h2  className="text-center text-4xl my-5"> Please Register</h2>
            <div className="w-[450px] mx-auto border border-[#2e9cf0] border-r-8 border-b-8 p-10 my-20">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Name:</span>
              </label>
              <input
                type="name"
                {...register("name")}
                placeholder="Name"
                className="input input-bordered  max-w-xs"
              />
            </div>
            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered w-80" />
                                 
                            </div>
             
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Email :</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered  max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Password :</span>
              </label>
              <input
                type={show ? 'text' : 'password'}
                {...register("password")}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <span onClick={()=>setShow(!show) }>show PassWord</span>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn bg-[#2e9cf0] w-80" value="Login" />
            </div>
                   <dir>
                        <p> Already Have a account ? Please <Link to='/login' className="link"> Login</Link></p>
                   </dir>
              <div>
               <SocialLogin></SocialLogin>
              </div>
            </div>
          </form>
        </>
     );
};

export default Register;
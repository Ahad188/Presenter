import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

 

const Register = () => {
     const { register, handleSubmit } = useForm();

     const onSubmit = (data) => console.log(data);
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
                type="password"
                {...register("password")}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn bg-[#2e9cf0] w-80" value="Login" />
            </div>
                   <dir>
                        <p> Already Have a account ? Please <Link to='/login' className="link"> Login</Link></p>
                   </dir>
              <div>
              <h3 className="mt-4 btn">Google</h3>
              </div>
            </div>
          </form>
        </>
     );
};

export default Register;
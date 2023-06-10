import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const image_token = import.meta.env.VITE_IMAGE_KEY;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  
  const hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`;

  const onSubmit = (data) => {
    //     console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resImage) => {
        // ToDo : here
        if (resImage.success) {
          const imgURL = resImage.data.display_url;
          const { teacherName, subject, studentCount, sit, price, description } = data;
          const newClass = {
            teacherName,
            subject,
            studentCount: parseFloat(studentCount),
            sit: parseFloat(sit),
            price: parseFloat(price),
            description,
            image: imgURL,
          };

          axiosSecure.post("/classes", newClass).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
          console.log(newClass);
        }
      });
  };

  return (
    <>
    <Helmet>
            <title>Presenter / Add-class</title>
     </Helmet>
    <div>
      <h2 className="text-center text-2xl font-bold">Add one More class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
         
        <div className="w-[450px] mx-auto border border-[#2e9cf0] border-r-8 border-b-8 p-10 my-20">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl">Subject :</span>
            </label>
            <input
              type="text"
              {...register("subject")}
              placeholder="Subject"
              className="input input-bordered w-[340px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">StudentCount : </span>
              </label>
              <input
                type="text"
                {...register("studentCount", { required: true })}
                placeholder="How much"
                className="input input-bordered w-40"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Price :</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-40"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">TeacherName </span>
              </label>
              <input
                type="text"
                {...register("teacherName", { required: true })}
                placeholder="TeacherName"
                className="input input-bordered w-40"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Set :</span>
              </label>
              <input
                type="text"
                {...register("sit", { required: true })}
                placeholder="set"
                className="input input-bordered w-40"
              />
            </div>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl"> Description:</span>
            </label>

            <textarea
              className="textarea textarea-info"
              {...register("description")}
              placeholder="Description"
            ></textarea>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl"> Image:</span>
            </label>

            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
            />
          </div>

          <div className="form-control mt-6">
            <input type="submit" className="btn bg-[#2e9cf0] w-[340px]" value="Add Class" />
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddClass;

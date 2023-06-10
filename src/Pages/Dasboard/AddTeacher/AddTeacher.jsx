import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_token = import.meta.env.VITE_IMAGE_KEY;

const AddTeacher = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`;

  const onSubmit = (data) => {
    // console.log({data});
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resImage) => {
        // console.log('resImg', resImage);
        if (resImage.success) {
          const imgURL = resImage.data.display_url;
          const { email, teacherName, subject, totalstudent } = data;
          const newT = {
            email,
            teacherName,
            subject,
            totalstudent: parseFloat(totalstudent),
            photo: imgURL,
          };
          console.log(newT);
          axiosSecure.post("/teachers", newT).then((data) => {
            console.log(data.data.acknowledged);
            if (data.data.acknowledged) {
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
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Add one More Teacher</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[450px] mx-auto border border-[#2e9cf0] border-r-8 border-b-8 p-10 my-20">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">TeacherName :</span>
            </label>
            <input
              type="text"
              {...register("teacherName", { required: true })}
              placeholder="TeacherName"
              className="input input-bordered w-full"
            />
          </div>

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

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl"> TotalStudent : </span>
            </label>
            <input
              type="text"
              {...register("totalstudent", { required: true })}
              placeholder="total-student"
              className="input input-bordered w-full"
            />
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
              <span className="label-text text-xl"> Image:</span>
            </label>

            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
            />
          </div>

          <div className="form-control mt-6">
            <input type="submit" className="btn bg-[#2e9cf0] w-[340px]" value="Add teacher" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;

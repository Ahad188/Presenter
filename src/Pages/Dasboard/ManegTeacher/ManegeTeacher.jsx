import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

 

const ManegeTeacher = () => {
     const [axiosSecure] = useAxiosSecure()
     const { data: teachers = [], refetch } = useQuery({
          queryKey: ["teachers"],
          queryFn: async () => {
            const res = await axiosSecure("/teachers");
            return res.data;
          },
        });
        const handleDelete = (item) => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/teachers/${item._id}`).then((res) => {
                console.log("deleted res", res.data);
                if (res.data.deletedCount > 0) {
                  refetch();
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
              });
            }
          });
        };



     return (
          <div className="w-full">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-2xl">
            <tr>
              <th>#</th>
              <th>Subject</th>
              <th>TeacherName</th>
            

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {teachers?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{item.subject}</div>
                    </div>
                  </div>
                </td>
                <td className="text-xl">{item.teacherName}</td>
               
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     );
};

export default ManegeTeacher;
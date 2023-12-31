import { Helmet } from "react-helmet-async";
import AllTeacher from "../../Component/AllTeacher";
import { useQuery } from "@tanstack/react-query";

const Instructors = () => {
  const { data: teacher = [] } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await fetch("   https://presenter-server.vercel.app/teachers");
      return res.json();
    },
  });
  // console.log(teacher);
  return (
    <>
      <Helmet>
        <title>Presenter / Instructor</title>
      </Helmet>
      {teacher?.map((teacher) => (
        <AllTeacher key={teacher._id} teacher={teacher}></AllTeacher>
      ))}
    </>
  );
};

export default Instructors;

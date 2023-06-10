import TeacherCard from "./TeacherCard";
import { useQuery } from "@tanstack/react-query";

const PopularTeacher = () => {
  const { data: teachers = [] } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/teachers");
      return res.json();
    },
  });

  console.log(teachers);

  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-9">There is a Popular Teacher </h2>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        {teachers?.slice(0, 6).map((teacher) => (
          <TeacherCard key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </>
  );
};

export default PopularTeacher;

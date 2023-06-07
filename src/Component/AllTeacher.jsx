const AllTeacher = ({teacher}) => {
  return (
    <div className="card card-side bg-base-400 bg-slate-300 shadow-xl my-5">
      <figure>
        <img className="h-[250px] w-[300px]" src={teacher?.photo}  />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-[#2e9cf0]">{teacher?.teacherName}</h2>
        <p className="text-xl font-semibold">  {teacher?.subject}</p>
        <p className="font-bold"> All-student : {teacher?.totalStudents}</p>
        <p className="text-xl font-medium">Email: {teacher?. email}</p>
         
      </div>
    </div>
  );
};

export default AllTeacher;

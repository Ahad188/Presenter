 

const TeacherCard = ({teacher}) => {
     // console.log(teacher);
     const {teacherName,subject,totalStudents,photo,email} = teacher;
     return (
          <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Shoes"
          className="rounded-xl h-[250px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{subject}</h2>
        <p>Name :{teacherName}</p>
        <p>All student : {totalStudents}</p>
         
         
      </div>
    </div>
     );
};

export default TeacherCard;
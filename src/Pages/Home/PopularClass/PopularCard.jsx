const PopularCard = ({ data }) => {
//   console.log(data);
  const { image, studentCount, subject, description,sit } = data;

const handelCard = (data)=>{
     console.log(data);
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
        {/* <p>{sit}</p> */}
        <p> set Available : {studentCount}</p>
        <div className="card-actions">
          <button className="btn" onClick={()=>handelCard(data)}>Join to Class</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;

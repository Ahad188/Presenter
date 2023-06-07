const PopularCard = ({ data }) => {
  console.log(data);
  const { image, studentCount, subject, description } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{subject}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn">Join to Class</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;


const SinglePopularClass = ({ item }) => {
  const { image, className, price } = item
  console.log(item);
  return (
    <>
      <div>

        <div className="card border-2   mt-8 ">
          <img className="w-full h-80" src={image} alt="" />
          <div className="card-body">
            <h2 className="card-title">{className}</h2>
            <p>Price: ${price}</p>

          </div>
        </div>
      </div>


    </>

  );

};

export default SinglePopularClass;
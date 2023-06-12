
// import img from '../../../assets/image/slider/'
const SingleWhatWeDo = ({ item }) => {
  
  const { name, image, description } = item
  return (
    <>
      <div   className=" rounded-md p-8 border-2  hover:bg-[#6772e5] transition duration-500 ease-in-out transform">
        <div className="hover:bg-[#6772e5]">
          <div className="card mt-8 hover:bg-[#6772e5] ">
            <img className=" rounded-full w-20 mx-auto" src={image} alt=""/>
            <div className="text-center space-y-2 mt-4">
              <h2 className="text-xl">{name}</h2>
              <p> {description}</p> 
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default SingleWhatWeDo;
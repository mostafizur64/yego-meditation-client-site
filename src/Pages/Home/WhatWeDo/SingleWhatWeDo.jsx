// import img from '../../../assets/image/slider/'
const SingleWhatWeDo = ({ item }) => {
    console.log(item);
    const { name, image, description } = item
    return (
        <>
<div className=" rounded-md p-8  hover:bg-[#6772e5] transition duration-500 ease-in-out transform">
  <div className="text-center w-20 mx-auto bg-white-700 relative group">
    <img className="rounded-full" src={image} alt="Shoes" />
    <div className="absolute inset-0 hidden group-hover:block">
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/2588zsb/istockphoto-1326970999-612x612.jpg')" }}></div>
    </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>


        </>
    );
};

export default SingleWhatWeDo;
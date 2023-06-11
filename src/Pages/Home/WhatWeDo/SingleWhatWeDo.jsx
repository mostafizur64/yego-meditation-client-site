// import img from '../../../assets/image/slider/'
const SingleWhatWeDo = ({ item }) => {
    console.log(item);
    const { name, image, description } = item
    return (
        <>
<div className="border-2 rounded-md p-8 bg-gray-100 hover:bg-red-100 transition duration-500 ease-in-out transform">
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
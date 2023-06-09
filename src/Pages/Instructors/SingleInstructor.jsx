import useAuth from "../../Hooks/useAuth";

const SingleInstructor = ({ instructor }) => {
console.log(instructor);
    const {name,email} = instructor
    const {user} = useAuth()
    return (

     <div  className="shadow-md rounded-md p-4 text-center">
           <div  className="">
           {/* style={{borderRadius: '0 200px 200px 200px'}}  */}
            <figure><img width='250px' height='250px'  src={user?.photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-3xl">{name}</h2>
                <p>{email}</p>
            </div>

        </div>
     </div>
        
    );
};

export default SingleInstructor;
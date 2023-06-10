import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const SingleClasses = ({ item }) => {
    const [findUser, setFindUser] = useState({});
    const { className, image, seat, price, instructorName, _id } = item;

    console.log(findUser);

    const { user } = useAuth();


    const handleBookedClass = () => {
      
        if(user && user?.email){
            const bookedItem = { bookedId: _id,studentName:user.displayName,studentEmail:user.email, className, image, seat, price: parseInt(price), instructorName };
            fetch('http://localhost:5000/bookedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                       
                        toast.success('Classes Booked Successfully')
                    }
                })
            }else{
            toast.success('please login first!')

        }

    }



    useEffect(() => {
        fetch(`http://localhost:5000/users-findUser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFindUser(data)
            })
    }, [user?.email]);

    return (
        <div className={`shadow-md rounded-md p-4 text-center gap-3 color ${seat == 0 && 'bg-red-500'}`}>
            <figure><img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[200px] h-[200px] rounded" src={image} alt="Shoes" /></figure>
            <div className="card-body text-orange-500 relative">
                <h2 className="text-xl text-extrabold ">Name :{className}</h2>
                <p>Price : ${price}</p>
                <p>Available-Seat : {seat}</p>
                <p>Instructor Name :{instructorName}</p>
                {
                    (seat == 0 || findUser.role === 'instructor' || findUser.role === 'admin') ? <>

                        <button disabled  className="btn btn-sm  mb-0" >Select Button</button>
                    </>
                        : <>
                            <button onClick={()=>handleBookedClass(item)} className="btn btn-sm  mb-0" >Select Button</button>

                        </>
                }

            </div>
        </div>
    );
};

export default SingleClasses;
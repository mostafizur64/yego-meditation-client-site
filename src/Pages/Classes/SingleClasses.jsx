import { useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const SingleClasses = ({ item }) => {
    const {user}  = useAuth()
    const handleButton = () => {
        toast.error('please login first !')
    }
    console.log(item);
    const { className, image, seat, price, instructorName } = item;
    return (
        <div className="shadow-md rounded-md p-4 text-center gap-3 color">
            <figure><img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[200px] h-[200px] rounded" src={image} alt="Shoes" /></figure>
            <div className="card-body text-orange-500 relative">
                <h2 className="text-xl text-extrabold ">Name :{className}</h2>
                <p>Price : ${price}</p>
                <p>Available-Seat : {seat}</p>
                <p>Instructor Name :{instructorName}</p>
                {
                   ( seat == 0)? <>
                 
                        <button disabled onClick={handleButton} className="btn btn-sm  mb-0" >Select Button</button>
                    </>
                        : <>
                            <button  onClick={handleButton} className="btn btn-sm  mb-0" >Select Button</button>

                        </>
                }

            </div>
        </div>
    );
};

export default SingleClasses;
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const img_hoisting_token = import.meta.env.VITE_Image_Upload_token;
console.log(img_hoisting_token);
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    // const img_hoisting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`;
    const {user} = useAuth()

    console.log('user are here',user.displayName);
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = (data) => {

        const formData = new FormData()
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData,
        })
        .then(res=>res.json())
        .then(imgResponse=>{
            console.log(imgResponse);
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                const {className,instructorName,instructorEmail,seat,price} = data;
                const newItem = {className,instructorName,instructorEmail,seat,price:parseInt(price),image :imgUrl ,status:'pending'}
                console.log(newItem);
                axiosSecure.post('/addClass',newItem)
                .then(data=>{
                    console.log('after posting new menu item',data.data);
                    if(data.data.insertedId){
                        reset()
                        toast.success('please login first !')
                    }
                })
            }
        })
        console.log(data);
    }
    return (
        <div className="w-full px-8">
            <h2 className="text-center text-4xl">this is Add class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text-alt">Class Name* </span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("className", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text-alt">Instructor Name *</span>
                        </label>
                       
                        <input type="text"  {...register("instructorName", { required: true })}   defaultValue={user?.displayName} className="input input-bordered w-full " />
                    
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text-alt">Instructor Email* </span>
                        </label>
                        <input type="email"  {...register("instructorEmail", { required: true })} defaultValue={user?.email} className="input input-bordered w-full " />

                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text-alt">Available Seat*</span>
                        </label>
                        <input type="text"  {...register("seat", { required: true })} placeholder="Available Seat" className="input input-bordered w-full " />
                       

                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text-alt">Price* </span>
                        </label>
                        <input type="text"  {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />

                    </div>
                </div>
                <div className="form-control w-full  my-6">
                    <input  {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />

                </div>
              <div className="text-center">

                <input  className="btn btn-sm " type="submit" value='Add Class' />
              </div>
            </form>
        </div>
    );
};

export default AddClass;
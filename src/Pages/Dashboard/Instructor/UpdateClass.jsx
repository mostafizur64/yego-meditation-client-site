
import { useLoaderData } from "react-router-dom";

import { toast } from "react-hot-toast";

const UpdateClass = () => {
   
    const singleClass = useLoaderData()

        const {className,seat,price,_id} =singleClass;
    
    // price
//     const [findClass,setFindClass] = useState({});
//     // const {user,loading} = useAuth()
//   useEffect(()=>{
//     fetch(`http://localhost:5000/singleClass/${_id}`)
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         setFindClass(data)
//     })
//   },[_id])
    
    console.log('dona '.findClass);

    const handleUpdate = (event)=>{
        event.preventDefault()
        const form  = event.target;
        const className = form.className.value;
        const seat = form.seat.value;
        const price = form.price.value;
        const updateClass = {className,seat,price}
        console.log(updateClass);
        fetch(`http://localhost:5000/updateClass/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateClass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
               toast.success('class updated Successfull')
            }
        })
    }
      

    return (
        <div>
            <div>
             <form onSubmit={handleUpdate}>
                <h2 className="text-3xl text-center">Update Class</h2>
                <div className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ClassName</span>
                            </label>
                            <input type="text" name='className' defaultValue={className}  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seat</span>
                            </label>
                            <input type="text" name="seat" defaultValue={seat} placeholder="Rating" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input type="text" placeholder="price" name="price" defaultValue={price} className="input input-bordered" />
                        </div>
                       
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="UPDATE ClASS" />
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateClass;
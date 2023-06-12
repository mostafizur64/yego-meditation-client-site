import { Link } from "react-router-dom";
import useBookedClassesByStudent from "../../../Hooks/useBookedClassesByStudent";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SelectedClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const [bookedClassByStudent, , refetch] = useBookedClassesByStudent();
   
    const handleDelete = (item) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/bookedClass/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount>0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div>
            
            <div className="w-full px-8">
                <h2 className="text-4xl text-center">Class Added By Student</h2>
            <div className="flex mr-8 gap-3 items-center mt-4">
          
            </div>
                <div className="overflow-x-auto mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SRL</th>
                                <th>Class Name</th>
                                <th>Image</th>
                                <th>Available Seat </th>
                                <th>Price</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookedClassByStudent.filter(booked=>booked.paid !== 'paid').map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.className}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.seat}</td>
                                    <td>{item.price}</td>
                                   
                                    <td>
                                        <Link to={`/dashboard/payment/${item._id}`} className="btn btn-ghost btn-xs bg-green-400">Payment</Link>
                                        <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs bg-orange-400">Delete</button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClass;
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data:allClasses=[],refetch} = useQuery(['allClass'],async()=>{
        const res  = await axiosSecure.get('/allClass');
        return res.data;
    })
    return (
        <div className="w-full px-8">
        <h2 className="text-4xl text-center">Class Added By Instructor</h2>
         <div className="overflow-x-auto mt-4">
             <table className="table">
                 <thead>
                     <tr>
                         <th>SRL</th>
                         <th>Class Name</th>
                         <th>Image</th>
                         <th>Available Seat </th>
                         <th>Price</th>
                         <th>Status</th>
                         <th>Enrolled Student</th>
                         <th>FeedBack</th>
                         <th>Action</th>
                         <th></th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         allClasses.map((item, index) => <tr key={item._id}>
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
                             <td>{item.status}</td>
                             <td>{'0'}</td>
                             <td>{item.status}</td>
                             <td>
                                 <button className="btn btn-ghost btn-xs bg-orange-400">Update</button>
                             </td>
                         </tr>
                         )
                     }
                 </tbody>


             </table>
         </div>
     </div>
    );
};

export default ManageClasses;
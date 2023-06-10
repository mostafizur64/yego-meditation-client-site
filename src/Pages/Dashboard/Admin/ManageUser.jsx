import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import { toast } from "react-hot-toast";

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data:allUser =[],refetch} = useQuery(['manageUser'],async()=>{
        const res = await axiosSecure.get('/allUser');
        return res.data;
    })

    const handleMakeAdmin = item =>{
        fetch(`http://localhost:5000/users/admin/${item._id}`,{
            method:'PATCH',

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                toast.success('Make Admin Successfully')
            }
        });
        
    }
    const handleMakeInstructor = item=>{
        fetch(`http://localhost:5000/users/instructor/${item._id}`,{
            method:'PATCH',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch()
                toast.success('Make Instructor Successfully!');
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Yoga Meditation | Manage user </title>
            </Helmet>
            <div className="w-full px-8">
                <h2 className="text-4xl text-center">Class Added By Instructor</h2>
                <div className="overflow-x-auto mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SRL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role </th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUser.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td className="Uppercase bg-green-600">{item.role}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <button onClick={()=>handleMakeAdmin(item)} className="btn btn-ghost btn-xs bg-orange-400">Make Admin</button>
                                        <button onClick={()=>handleMakeInstructor(item)} className="btn btn-ghost btn-xs bg-orange-400">Make Instructor</button>
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

export default ManageUser;
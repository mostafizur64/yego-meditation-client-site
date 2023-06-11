import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import DeniedModal from "./DeniedModal";
import { useState } from "react";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const [modal, setModal] = useState({})
    const { data: allClasses = [], refetch } = useQuery(['allClass'], async () => {
        const res = await axiosSecure.get('/allClass');
        return res.data;
    });

    const handleApproved = (id) => {
        fetch(`http://localhost:5000/class-statusChange/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.modifiedCount) {
                    toast.success('status approved');
                }
            })

    }

    return (
        <>
            <Helmet>
                <title>Yoga Meditation | Manage Class</title>
            </Helmet>
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
                                    <td>0</td>
                                    <td>{item.status}</td>
                                    <td className="">
                                        <label disabled={item.status === 'approved' || item.status === 'denied'} onClick={() => setModal(item)} htmlFor="my_modal_6" className="btn btn-ghost btn-xs bg-orange-400">Denied</label>
                                        <button disabled={item.status === 'approved' || item.status === 'denied'} onClick={() => handleApproved(item._id)} className="btn btn-ghost btn-xs bg-orange-400">Approved</button>
                                        {/* <button onClick={() => handleDeined => (item._id)} className="btn btn-ghost btn-xs bg-orange-400">Denied</button> */}


                                    </td>
                                </tr>

                                )
                            }
                        </tbody>


                    </table>
                    <DeniedModal modal={modal}></DeniedModal>
                </div>
            </div>
        </>
    );
};

export default ManageClasses;
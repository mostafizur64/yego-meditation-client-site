import { Link } from "react-router-dom";
import useClassesByInstructor from "../../../Hooks/useClassesByInstructor";

const MyClass = () => {

    const [ClassesByInstructor]= useClassesByInstructor();

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
                            ClassesByInstructor.map((item, index) => <tr key={item._id}>
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
                                    <Link to={`/dashboard/updateClass/${item._id}`} className="btn btn-ghost btn-xs bg-orange-400">Update</Link>
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

export default MyClass;
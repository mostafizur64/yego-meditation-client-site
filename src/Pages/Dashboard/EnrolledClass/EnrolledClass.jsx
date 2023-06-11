
import useAllEnrolledClassesByStudent from "../../../Hooks/useAllEnrolledClassesByStudent";

const EnrolledClass = () => {
    const [enrolledClasses] = useAllEnrolledClassesByStudent()
    console.log('data koi re',enrolledClasses);
    return (
        <div>

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
                            enrolledClasses.map((item, index) => <tr key={item._id}>
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

export default EnrolledClass;
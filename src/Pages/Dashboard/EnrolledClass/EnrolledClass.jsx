
import useAllEnrolledClassesByStudent from "../../../Hooks/useAllEnrolledClassesByStudent";

const EnrolledClass = () => {
    const [enrolledClasses] = useAllEnrolledClassesByStudent()
    console.log('data koi re',enrolledClasses);

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return formattedDate + ' ' + formattedTime;
    };
    return (
        <div>

        <div className="w-full px-8">
            <h2 className="text-4xl text-center">My Enrolled Class</h2>
       
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SRL</th>
                            <th>Class Name</th>
                            <th>Price</th>
                           <th>Date</th>
                          
                        </tr>
                    </thead>
                    <tbody>

                        {
                            enrolledClasses.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.className}</td>
                              
                              
                                <td>{item.price}</td>
                              
                                <td>{formatDateTime(item.date)}</td>
                              
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
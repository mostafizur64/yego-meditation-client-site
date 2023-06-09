import SingleInstructor from "./SingleInstructor";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const Instructors = () => {
       const [axiosSecure] = useAxiosSecure()
    const {data: allInstructor=[],refetch} = useQuery(['allInstructors'],async()=>{
        const res = await axiosSecure.get('/allInstructor')
        return res.data
    })
    // useEffect(() => {
    //     fetch('/instractors.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setInstructors(data)
    //         })
    // }, [])
    return (
        <div className="card w-full  shadow-xl grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 p-8 ">
            {
                allInstructor.map((instructor,index)=>{
                    return <SingleInstructor key={index} instructor={instructor}></SingleInstructor>
                })
            }
        </div>

    );
};

export default Instructors;
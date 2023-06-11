import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllEnrolledClassesByStudent = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user,loading} = useAuth()
    const {data:enrolledClasses=[] ,refetch} = useQuery({
        queryKey:['enrolledClass',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/allEnrolledClassBookedByStudent?email=${user?.email}`)
            return res.data;
        }
    })
    return [enrolledClasses,refetch]
   
};

export default useAllEnrolledClassesByStudent;
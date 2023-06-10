import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBookedClassesByStudent = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user,loading} = useAuth()
    const {data:bookedClassByStudent= [] , refetch} = useQuery({
        queryKey:['bookedClasses',user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/allClassByStudent?email=${user?.email}`)
            return res.data;
        }
    })
    return [bookedClassByStudent , refetch];
       
};

export default useBookedClassesByStudent;
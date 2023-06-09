import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user,loading}= useAuth();
    const {data:isInstructor=[],loading:isAdminLoading} = useQuery({
        queryKey:['isInstructor',user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            console.log('is instructor response',res);
            return res.data.instructor;
            
        }
    })
    return [isInstructor,isAdminLoading]
};

export default useInstructor;
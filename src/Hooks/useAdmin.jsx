import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user,loading}= useAuth();
    const {data:isAdmin,loading:isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('is admin response',res);
            return res.data.admin;
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;
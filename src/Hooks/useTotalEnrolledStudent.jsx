
import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useTotalEnrolledStudent = () => {
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data:totalEnrolled=[],refetch} = useQuery({
        queryKey:['enrolled',user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res =  await axiosSecure(`/totalEnrolledStudent?email=${user?.email}`);
            console.log('res from axios',res);
            return res.data;
        },
    })
    
    return [totalEnrolled, refetch];
    
};
  


export default useTotalEnrolledStudent;
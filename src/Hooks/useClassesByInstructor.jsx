import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from 'react-query';

const useClassesByInstructor = () => {
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data:ClassesByInstructor=[],refetch} = useQuery({
        queryKey:['classes',user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res =  await axiosSecure(`/allClassByInstructor?email=${user?.email}`);
            console.log('res from axios',res);
            return res.data;
        },
    })
    
    return [ClassesByInstructor, refetch];
    
};

export default useClassesByInstructor;
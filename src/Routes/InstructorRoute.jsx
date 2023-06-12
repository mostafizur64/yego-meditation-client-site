import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor  ,isAdminLoading] = useInstructor();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;
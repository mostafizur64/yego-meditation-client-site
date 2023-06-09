import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathName || '/';
    const navigate = useNavigate()
    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            const saveUser = {name:loggedUser.displayName , email: loggedUser.email }
            fetch(`https://localhost:5000/users`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {
                navigate(from, { replace: true });
            })
        }).catch(error=>console.log(error));
    }
    return (
        <div>
            <div className="text-center mb-0">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
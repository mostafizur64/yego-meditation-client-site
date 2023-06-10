import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                toast.success('login successfully!')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }
    const handleTogglePassword = () =>{
        setShowPassword(!showPassword);
    }
    const handleChange = (event) =>{
       alert(event.target.value);

    }

    return (
        <div>
            <Helmet>
                <title>Yoga Meditation | Login</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-full lg:w-1/2">
                        <img className="w-full" src="https://i.ibb.co/tHvsrqr/Yoga-Berlin.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm  ">
                        <div className="card-body">
                            <h2 className="text-4xl font-semibold text-center">Login </h2>
                            <form onSubmit={handleSubmit(onSubmit)}>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input   type={showPassword ? 'text' : 'password'} onChange={handleChange}  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}    className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <div className=""><FaEyeSlash onClick={handleTogglePassword} className="absolute -mt-8 ml-[290px]">  {showPassword ? 'Hide' : 'Show'}</FaEyeSlash></div>

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <span className="text-center text-black ">Mew To Avanna <Link to='/registration ' className="text-red-600">Resister</Link></span>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
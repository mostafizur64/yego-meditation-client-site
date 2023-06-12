import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

import SocialLogin from "../Pages/Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

const Registration = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, role: 'student' }
                        fetch('https://yoga-meditation-server-site.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('data is console ', data);
                                if (data.insertedId) {
                                    reset();
                                  toast.success('Registration done')
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <div>
            <Helmet>
                <title>Yoga Meditation | Register</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-full lg:w-1/2">
                        <img className="w-full" src="https://i.ibb.co/RzBcyyF/b44c36-5de0b342f2c94b4e9c6bb5cb3ebcc9c4-mv2.webp" alt="" />
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm  ">
                        <div className="card-body">
                            <h2 className="text-4xl font-semibold text-center">Register </h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>

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
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("confirmPassword", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.confirmPassword?.type === 'required' && <p className="text-red-600">confirmPassword is required</p>}
                                    {errors.confirmPassword?.type === 'minLength' && <p className="text-red-600">confirmPassword must be 6 characters</p>}
                                    {errors.confirmPassword?.type === 'maxLength' && <p className="text-red-600">confirmPassword must be less than 20 characters</p>}
                                    {errors.confirmPassword?.type === 'pattern' && <p className="text-red-600">confirmPassword must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                            </form>
                            <span className="text-center text-black ">Already have and Account Please <Link to='/login ' className="text-red-600">Login</Link></span>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

   
};

export default Registration;

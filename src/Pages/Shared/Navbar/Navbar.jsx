import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import useAuth from "../../../Hooks/useAuth";


const Navbar = () => {
    const {user,logOut} = useAuth();
    console.log(user);


const handleSignOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error));
}

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructor</Link></li>
        <li><Link to='/Classes'>Classes</Link></li>
       {
        user ? <>
         <li><Link to='/dashboard'>Dashboard</Link></li>
        <img className=' h-8 w-8  rounded-full mr-2 lg:mt-2' src={user.photoURL} title={user.displayName} alt="" />
        <li><button onClick={handleSignOut} className=" bg-green-950 text-white hover:bg-red-500">Logout</button></li>
        </>
        :<>
        <li><Link to='/login' className=" bg-green-950 text-white hover:bg-red-500">Login</Link></li>
        </>
       }

      
    </>
    return (
        <div>
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 z-10 bg-opacity-30 shadow rounded-box w-52 lg:navbar-end">
                                {navItems}
                            </ul>
                        </div>
                        <Link to='/'><img width='100px' height='100px' src="https://i.ibb.co/ZfHYmJF/logo-Asset-6.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex lg:navbar-end  ">
                        <ul className="menu menu-horizontal px-1 ">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <hr className="mt-4 bg-slate-950" />
            </Container>
        </div>
    );
};

export default Navbar;
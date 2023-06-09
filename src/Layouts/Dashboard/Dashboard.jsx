import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/additem"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageClasses"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>

                        </>
                            : isInstructor ? <>
                                <li><NavLink to="/"><FaHome></FaHome> Instructor Home Page</NavLink></li>
                                <li><NavLink to="/dashboard/addClass"><FaHome></FaHome> My Add Classes</NavLink></li>
                                <li><NavLink to="/dashboard/myClass"><FaCalendarAlt></FaCalendarAlt> My Classes</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>

                            </> :

                                <>
                                    <li><NavLink to="/"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/selectedClass"><FaHome></FaHome> My Selected Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolledClass"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                </>
                    }
                    <li><a className="text-3xl">Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    )
};

export default Dashboard;
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
    const {user,logOut}= useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
        })
        .catch(error=>console.log(error))
    }
    const navItems = <>
        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-orange-500 font-bold' : 'mymenu')}>Home</NavLink>
        </li>
        <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'text-orange-500 font-bold' : 'mymenu')}>About</NavLink>
        </li>
        {user?.email ? 
        <>
        <li><NavLink to='/bookings' className={({ isActive }) => (isActive ? 'text-orange-500 font-bold' : 'mymenu')}>My Bookings</NavLink>
        </li>
        <li><Link  className= 'mymenu'><button onClick={handleLogOut}>Logout</button></Link>
        </li>
        </> : <li><NavLink to='/login' className={({ isActive }) => (isActive ? 'text-orange-500 font-bold' : 'mymenu')}>Login</NavLink>
        </li> }
       
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="flex space-x-4 text-xl px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;
import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>

        <li><NavLink className={({isActive})=> isActive ? "btn text-green-600 border-2 border-green-500" : "text-neutral-900 text-opacity-80 text-lg font-normal font-['Work Sans']"}  to="/">Home</NavLink></li>
        <li><NavLink className={({isActive})=> isActive ? "btn text-green-600 border-2 border-green-500" : "text-neutral-900 text-opacity-80 text-lg font-normal font-['Work Sans']"} to="/listedBooks">Listed Books</NavLink></li>
        <li><NavLink className={({isActive})=> isActive ? "btn text-green-600 border-2 border-green-500" : "text-neutral-900 text-opacity-80 text-lg font-normal font-['Work Sans']"} to="/pagesRead">Pages to Read</NavLink></li>
        <li><NavLink className={({isActive})=> isActive ? "btn text-green-600 border-2 border-green-500" : "text-neutral-900 text-opacity-80 text-lg font-normal font-['Work Sans']"} to="/interviews">Author Interviews</NavLink></li>
        <li><NavLink className={({isActive})=> isActive ? "btn text-green-600 border-2 border-green-500" : "text-neutral-900 text-opacity-80 text-lg font-normal font-['Work Sans']"} to="/adaptations">Book Adaptations</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100 container mx-auto lg:px-20 px-5 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-neutral-900 text-2xl font-bold font-['Work Sans']">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn bg-green-500 text-white">Sign In</a>
                <a className="btn bg-teal-300 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;
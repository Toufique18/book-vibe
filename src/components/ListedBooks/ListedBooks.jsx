import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="bg-neutral-900 bg-opacity-5 rounded-2xl p-4 ">
                <h1 className="text-center text-neutral-900 text-[28px] font-bold font-['Work Sans'] ">Book</h1>
            </div>
            <div className="dropdown justify-center">
                <div tabIndex={0} role="button" className="btn bg-green-500 text-white m-1">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </div>
            <div>
            <div className="flex items-center  overflow-x-auto overflow-y-hidden  flex-nowrap  dark:text-gray-800">
                <Link 
                to='' 
                onClick={()=> setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    
                    <span>Read Books</span>
                </Link>
                <Link 
                to={`wishlist`} 
                onClick={()=> setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                   
                    <span>Wishlist Books</span>
                </Link>
                
                
            </div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;
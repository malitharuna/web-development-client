import React from 'react';
import { Link } from 'react-router-dom';



const NotFound = () => {
    return (
        <div className='className="px-8 py-3 font-semibold rounded'>
            <h1>OOps !! Sorry</h1>
           
            <img className="p-0 mx-auto w-1/3  rounded" src='https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png' alt='404'/>
            <Link to="/" className=" dark:bg-indigo-400 dark:text-gray-900">Back to Homepage</Link>
           
        </div>
    );
};

export default NotFound;


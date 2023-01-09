import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
     const data = useLoaderData()
     console.log(data);
    const {name, price, picture, details, category_id, Instructor, rating}  = data

    return (
          <div className="px-4 shadow-lg w-auto py-10 rounded-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="overflow-hidden md:flex transition-shadow duration-300 dark:bg-gray-300 rounded shadow-sm">
                <Link to='/'>
                    <img
                        src={picture}
                        className="object-cover md:w-[340px] md:h-[370px]"
                        alt=""
                    />
                </Link>
                <div className="p-5 border border-t-0 border-r-0 md:w-[70%]">
                    <p
                        aria-label="Category"
                        title="Film It!"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-gray-900"
                    >
                        {name}
                    </p>
                    <p className="mb-2 hidden md:block text-gray-900">
                        {details}
                    </p>
                    <div className='flex flex-col-reverse text-gray-900 md:flex-row mx-auto justify-around md:mt-5'>
                        <div className='flex content-center'>
                            <img className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" src={Instructor.img} alt="" />
                            <div className='ml-3'>
                                <p className='font-medium'>Author Name</p>
                                <p> {Instructor.name}</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mb-3 md:mt-0'>
                            <p className='text-blue-700 font-medium mr-11'>Price: {price}</p>
                            <p className='text-blue-700 inline-flex relative'>Rating: {rating}<FaStar className='text-yellow-500 absolute right-[-18px] top-1' /></p>
                        </div>
                    </div>
                    <div className='flex justify-center md:mt-10'>
                        <Link to={`/course/details/${category_id}`} className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-indigo-400 hover:bg-indigo-500 dark:text-gray-900">Course Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
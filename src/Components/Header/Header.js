import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <section className="dark:bg-gray-200 dark:text-gray-900">
            <div className="container flex flex-col justify-center px-6 mx-auto sm:pt-12 lg:pt-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={`https://www.arenaslg.com/wp-content/uploads/2020/04/website-development-banner_33099-1687-1.jpg`}></img>
                </div> 
                <div className="flex flex-col justify-center px-6 pt-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Build
                        <span className="dark:text-red-500"> Carrier</span> With Web Developing Course
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">We don't build only Website 
                        <br className="hidden md:inline lg:hidden" />We also Shape your  ambitius 
                        
                        Dreams
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        {
                            user?.uid ? <Link rel="noopener noreferrer" to="/profile" className="px-8 py-3 text-lg font-semibold rounded dark:bg-indigo-400 dark:text-gray-900">
                                Visit Profile
                            </Link> : <>
                                <Link rel="noopener noreferrer" to="login" className="px-8 py-3 text-lg font-semibold rounded dark:bg-indigo-400 dark:text-gray-900">
                                    Login
                                </Link>

                                <Link rel="noopener noreferrer" to="/register" className="px-8 py-3 text-lg font-semibold rounded dark:bg-indigo-400 dark:text-gray-900">
                                    Register
                                </Link>
                            </>
                        }
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Header;
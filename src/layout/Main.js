import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../Components/Categories/Categories';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
        <>
            <div>
                <Header></Header>
            </div>
            <div className=" mx-[5%] mb-20 mt-20 grid grid-cols-4 gap-4">
                <div className="border p-10 rounded-xl shadow-lg hidden md:block">
                    <h1 className='text-2xl font-medium text-blue-600'>Course Categories</h1>
                    <div className="mt-1 h-px w-full dark:bg-indigo-500"></div>
                    <span className='text-blue-800 font-extrabold'>*----**----*</span>
                    <div className='mt-8'>
                        <Categories></Categories>
                    </div>
                </div>
                <div className="md:col-span-3 flex items-center col-span-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
        <Footer></Footer>
    </div>
    );
};

export default Main;
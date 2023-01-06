import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
        
        </div>
    );
};

export default Main;
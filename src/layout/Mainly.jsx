import React from 'react';
import Navbar from '../component/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/Footer';
import Nav from '../component/shared/Nav';

const Mainly = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainly;
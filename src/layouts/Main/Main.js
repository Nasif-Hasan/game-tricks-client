import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header';
import Footer from '../../Pages/Shared/Footer';
import Head from '../../Pages/Shared/Head';


const Main = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Head></Head>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
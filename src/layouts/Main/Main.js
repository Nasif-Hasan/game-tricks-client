import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer';
import Head from '../../Pages/Shared/Head';

const Main = () => {
    return (
        <div>
            <Head></Head>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
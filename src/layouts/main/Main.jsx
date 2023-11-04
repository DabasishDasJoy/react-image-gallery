import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;

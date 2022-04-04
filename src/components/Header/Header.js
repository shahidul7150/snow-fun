import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' flex items-center justify-between p-3 bg-cyan-200'>
            <div>
                <h2 className='text-3xl font-medium'>SNOW-FUN</h2>
            </div>
            <nav className='text-lg  font-medium'>
                <Link className='mr-4' to="/">Home</Link>
                <Link className='mr-4' to="/review">Review</Link>
                <Link className='mr-4' to="/dashboard">Dashboard</Link>
                <Link className='mr-4' to="/blogs">Blogs</Link>
                <Link className='mr-4' to ="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;
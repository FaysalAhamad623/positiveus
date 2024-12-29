import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <img className='h-14' src="/images/logo.png" alt="" />
           <ul className='flex gap-10 items-center'>
            <li>
                About Us
            </li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li><button className='border border-[#191A23] rounded-[14px] py-[15px] px-[25px]'>Request a quote</button></li>
           </ul>
        </nav>
    );
};

export default Navbar;
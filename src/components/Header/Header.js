import React, { useState } from 'react';
import Logo from '../../images/quiz-logo.jpg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex justify-between align-middle bg-gray-700 w-full'>
            <img className='w-24 p-2' src={Logo} alt="" />
            <div>
                <div className='md:hidden sm:flex justify-end'>
                    {
                        open ?
                            <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6" />
                            : <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6" />
                    }
                </div>

                <ul className={`bg-gray-700 md:flex justify-between text-white absolute md:static duration-700 ease-in ${open ? 'top-6 right-3' : 'top-[-120px] right-3'}`}>
                    <li className='mr-12'> <Link to="/">Quiz Items</Link> </li>
                    <li className='mr-12'> <Link to="/statistics">Statistics</Link> </li>
                    <li className='mr-12'> <Link to="/about">About Us</Link> </li>
                </ul>
            </div>

        </nav>
    );
};

export default Header;
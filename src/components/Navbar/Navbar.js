import React, { useState } from 'react';
import Links from '../Links/Links';
import Logo from '../../images/quiz-logo.jpg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Topic', path: '/topic' },
        { id: 1, name: 'Statistics', path: '/statistics' },
        { id: 1, name: 'Blogs', path: '/blogs' }
    ]
    return (
        <nav className='flex justify-between align-middle bg-gray-700 w-full'>
            <img className='w-24' src={Logo} alt="" />
            <div>
                <div className='md:hidden sm:flex justify-end'>
                    {
                        open ?
                            <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6" />
                            : <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6" />
                    }
                </div>

                <ul className={`md:flex justify-between text-white absolute md:static duration-700 ease-in ${open ? 'top-6 right-2' : 'top-[-120px] right-2'}`}>
                    {
                        routes.map(route => <Links key={route.id} route={route}></Links>)
                    }
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;
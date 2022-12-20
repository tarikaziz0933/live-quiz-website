import React from 'react';

const Links = ({ route }) => {
    return (
        <div className='bg-gray-700'>
            <li className='mr-12'>
                <a href={route.path}><h4>{route.name}</h4></a>
            </li>
        </div>
    );
};

export default Links;
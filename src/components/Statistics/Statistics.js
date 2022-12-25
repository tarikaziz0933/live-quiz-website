import React from 'react';

const Statistics = ({ correct, wrong }) => {
    return (
        <div>
            <h2 className='text-3xl bg-green-700 text-white font-bold p-6'>You have corrected {correct} times</h2>
            <h2 className='text-3xl bg-red-600 text-white font-bold p-6'>You have clicked {wrong} times on wrong answer</h2>
        </div>
    );
};

export default Statistics;
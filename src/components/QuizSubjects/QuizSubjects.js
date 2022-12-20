import React from 'react';

const QuizSubjects = ({ quizData }) => {
    return (
        <div>
            {/* <h3>This is Subjects</h3> */}
            <div className='border-2 border-black rounded-md'>
                <img className='p-3 bg-lime-200' src={quizData.logo} alt="" />
                <h2 className='text-xl font-bold'>{quizData.name}</h2>
                <div className='flex justify-between m-4'>
                    <p className='bg-sky-200 px-2 py-1 rounded-md'>No of Ques:{quizData.total}</p>
                    <button className='text-white font-bold bg-sky-700 rounded-md px-4 py-1'>Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default QuizSubjects;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuestion from '../EachQuestion/EachQuestion';

const QuizQuestion = () => {
    const questionPaper = useLoaderData();
    const { name, logo, questions } = questionPaper.data;
    console.log(questionPaper);
    return (
        <div>
            <div className='flex justify-center items-center mt-10 border-4 border-cyan-700 bg-slate-500'>
                <img className='w-20' src={logo} alt="" />
                <h3 className='text-2xl text-bold text-white ml-4'>Quize Starts for {name}</h3>
            </div>
            <EachQuestion questions={questions}></EachQuestion>

        </div>
    );
};

export default QuizQuestion;
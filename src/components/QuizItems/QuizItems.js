import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizSubjects from '../QuizSubjects/QuizSubjects';
import backgroundImage from '../../images/background-img-quiz.jpg'

const QuizItems = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div>
            <div className=' bg-no-repeat bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className=''>
                    <h3 className='text-4xl font-bold text-white p-48'>Compare yourself by taking more quiz</h3>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-9 m-10'>
                {
                    data.map(quizData => <QuizSubjects key={quizData.id} quizData={quizData} ></QuizSubjects>)
                }
            </div>
        </div>
    );
};

export default QuizItems;
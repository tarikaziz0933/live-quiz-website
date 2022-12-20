import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizSubjects from '../QuizSubjects/QuizSubjects';
import backgroundImage from '../../images/background-img-quiz.jpg'

const QuizItems = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div>
            <div className='flex justify-center' style="background-image:backgroundImage">
                <h3>hello</h3>
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
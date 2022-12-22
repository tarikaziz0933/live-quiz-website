import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQuestion = () => {
    const questionPaper = useLoaderData();
    const { name } = questionPaper.data;
    console.log(questionPaper);
    return (
        <div>
            <h3>{name}</h3>

        </div>
    );
};

export default QuizQuestion;
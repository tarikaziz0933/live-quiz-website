import React from 'react';
import DisplayQuestion from '../DisplayQuestion/DisplayQuestion';

const EachQuestion = ({ questions, IncreaseCorrect, answers }) => {
    console.log(questions);
    return (
        <div className='m-4'>
            {
                questions.map(question => <DisplayQuestion key={question.id} questionInfo={question} IncreaseCorrect={IncreaseCorrect} answers={answers}></DisplayQuestion>)
            }
        </div>
    );
};

export default EachQuestion;
import React from 'react';
import DisplayQuestion from '../DisplayQuestion/DisplayQuestion';

const EachQuestion = ({ questions }) => {
    console.log(questions);
    return (
        <div className='m-4'>
            {
                questions.map(question => <DisplayQuestion key={question.id} questionInfo={question}></DisplayQuestion>)
            }
        </div>
    );
};

export default EachQuestion;
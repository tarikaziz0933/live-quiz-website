import React from 'react';

const Displayquestion = (props) => {
    console.log(props.questionInfo)
    let { question, options, correctAnswer } = props.questionInfo;
    console.log(options)
    // let newquestionInfo = questionInfo.questionInfo;
    question = question.replace(/<(.|\n)*?>/g, '');
    return (
        <div className='border-2 border-zinc-600 m-5 h-40'>
            <h3>{question}</h3>
            {
                options.map(option => <div><input type="radio" value={option} checked={correctAnswer === option} />{option}</div>)
            }
        </div>
    );
};

export default Displayquestion;
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Displayquestion = (props) => {
    const [viewAns, setViewans] = useState(false);
    let { question, options, correctAnswer } = props.questionInfo;
    let { IncreaseCorrect, DecreaseCorrect, answers } = props;


    question = question.replace(/<(.|\n)*?>/g, '');
    // correctAnswer = correctAnswer.replace(/<(.|\n)*?>/g, '');
    // answers = answers.replace(/<(.|\n)*?>/g, '');
    console.log(answers);

    // console.log(answers.map(answer => answer.includes(`${correctAnswer}`)));


    const checkAns = (value) => {
        // setAnswer(value);
        if (value === correctAnswer) {
            IncreaseCorrect(value);
            <p>yesss</p>

            // let newAnswers = answers.push(value);
            // setAnswer(newAnswers);
            alert("Your answer is Correct");
        }
        else {
            DecreaseCorrect();
        }
    };

    // const onValueChange = (event) => {   checked={answers.map(answer => answer.includes(correctAnswer))}
    //     const selectedOption = event.target;  checked={answers.find(answer => answer === correctAnswer)}
    // }
    return (
        <div className='border-2 border-zinc-600 m-5 '>
            <h3 className="text-2xl">{question}</h3>
            <div className="grid grid-cols-2 justify-center justify-items-start ml-52 p-4">
                {
                    options.map(option => <div className=" border-2 border-gray-800 rounded-lg p-4 w-60 m-5"><input type="radio" onChange={() => checkAns(option)}
                    />{option}</div>)
                }
                <div className='hidden sm:flex justify-end'>
                    {
                        viewAns ?
                            <EyeSlashIcon onClick={() => setViewans(!viewAns)} className="h-6 w-6" />
                            : <EyeIcon onClick={() => setViewans(!viewAns)} className="h-6 w-6" />
                    }
                </div>

            </div>
            <div className={`bg-gray-700 flex justify-between text-white absolute ${viewAns ? ' flex' : 'hidden'}`}>
                <h2 className='p-6'>Correct answer is: {correctAnswer}</h2>
            </div>
        </div>
    );
};

export default Displayquestion;
const Displayquestion = (props) => {
    let { question, options, correctAnswer } = props.questionInfo;
    let { IncreaseCorrect, answers } = props;

    question = question.replace(/<(.|\n)*?>/g, '');
    // correctAnswer = correctAnswer.replace(/<(.|\n)*?>/g, '');
    // answers = answers.replace(/<(.|\n)*?>/g, '');
    console.log(answers);

    // console.log(answers.map(answer => answer.includes(`${correctAnswer}`)));


    const checkAns = (value) => {
        // setAnswer(value);
        if (value === correctAnswer) {
            IncreaseCorrect(value);

            // let newAnswers = answers.push(value);
            // setAnswer(newAnswers);
            alert("Your answer is Correct");
        }
        else {

        }
    };

    // const onValueChange = (event) => {   checked={answers.map(answer => answer.includes(correctAnswer))}
    //     const selectedOption = event.target;  checked={answers.find(answer => answer === correctAnswer)}
    // }
    return (
        <div className='border-2 border-zinc-600 m-5 h-40'>
            <h3>{question}</h3>
            {
                options.map(option => <div><input type="radio" onChange={() => checkAns(option)}
                />{option}</div>)
            }
        </div>
    );
};

export default Displayquestion;
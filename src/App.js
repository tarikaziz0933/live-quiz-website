import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Main from './components/Layouts/Main';
import NothingFound from './components/NothingFound/NothingFound';
import QuizItems from './components/QuizItems/QuizItems';
import QuizQuestion from './components/QuizQuestions/QuizQuestion';
import Statistics from './components/Statistics/Statistics';

function App() {
  let [correct, setCorrect] = useState(0);
  let [wrong, setWrong] = useState(0);
  let [answers, setAnswer] = useState([]);



  const IncreaseCorrect = (value) => {
    correct = correct + 1;
    setCorrect(correct);

    let newAnswers = [...answers, value];
    setAnswer(newAnswers);
    console.log(correct);

  }
  const DecreaseCorrect = () => {
    wrong = wrong + 1;
    setWrong(wrong);
  }
  // console.log(answers.length);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <QuizItems></QuizItems>
        },
        {
          path: "/:quizId",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizQuestion IncreaseCorrect={IncreaseCorrect} DecreaseCorrect={DecreaseCorrect} answers={answers}></QuizQuestion>
        },
        {
          path: "/statistics",
          element: <Statistics correct={correct} wrong={wrong}></Statistics>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/about",
          element: <About></About>
        }
      ]
    },
    {
      path: "*",
      element: <NothingFound></NothingFound>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

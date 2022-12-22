import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './components/Layouts/Main';
import QuizItems from './components/QuizItems/QuizItems';
import QuizQuestion from './components/QuizQuestions/QuizQuestion';
import Statistics from './components/Statistics/Statistics';

function App() {
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
          element: <QuizQuestion></QuizQuestion>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/about",
          element: <About></About>
        }
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

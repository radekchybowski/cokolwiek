import './assets/quiz.scss';
import {useEffect, useState} from 'react';
import Confetti from "react-confetti";
import {nanoid} from 'nanoid';
import Welcome from './components/Welcome';
import QuizBody from './components/QuizBody';

const Quiz = () => {
  const [started, setStarted] = useState(false);

  return ( 
    <main>
      {!started && <Welcome handleClick={e => setStarted(true)} />}
      {started && <QuizBody/>}
    </main>
   );
}
 
export default Quiz;
import './assets/tenzies.scss';
import Die from './components/Die';
import {useEffect, useState} from 'react';
import Confetti from "react-confetti";
import {nanoid} from 'nanoid';


const Tenzies = () => {

  const [dices, setDices] = useState(allNewDices());
  const [gameWon, setGameWon] = useState(false);
  const [movesCounter, setMovesCounter] = useState(-1);

  function generateNewDie() {
    const randomNumber = Math.ceil(Math.random() * 6);
    return {
      number: randomNumber,
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDices() {
    const diceValuesArray = [];
      for(let i = 0; i < 10; i++) {  
        diceValuesArray.push(generateNewDie());
      }
      return diceValuesArray;
    }
  
  function holdDice(id) {
    setDices(oldDices => oldDices.map(dice => 
      dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice));
  }

  function rollDice() {
    setDices(oldDices => oldDices.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  function newGame() {
    setDices(allNewDices());
    setMovesCounter(-1);
    setGameWon(false);
  }

  useEffect(() => {
    let won = true;
    setMovesCounter(prev => prev + 1);

    dices.map(dice => {
      if ( (dice.isHeld === false) || (dice.number !== dices[0].number) ) won = false;
    })

    if (won === true) setGameWon(true);
  }, [dices]);

  const diceComponents = dices.map( dice => 
    <Die id={dice.id} key={dice.id} value={dice.number} isHeld={dice.isHeld} hold={holdDice}/>
  );

  return (
    <main>
      {gameWon && < Confetti />}
      <h1>{gameWon ? 'You won!' : 'Dupa'}</h1>
      <div className="die-container">
        {diceComponents}
      </div>
      {!gameWon && <button className="btn roll-dices" onClick={rollDice}>Roll dices</button>}
      {gameWon && <button className="btn roll-dices" onClick={newGame}>New game</button>}
      {gameWon && <p>Number of moves: {movesCounter}</p>}
    </main>
  );
}
 
export default Tenzies;
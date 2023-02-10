import { useState } from 'react';
import Calculation from './components/Calculation';
import Result from './components/Result';

import './App.css';

function App() {

  /*
     enteredNumbers: object that tracks the first and second number 
     chosenCalculation: string that tracks the chosen calculation (add, subtract, multiply, divide)
  */

  const [enteredNumbers, setEnteredNumbers] = useState({first: 0, second: 0}); 
  const [chosenCalculation, setChosenCalculation] = useState('add');

  const changeFirstNumberHandler = (event) => {

    // if you pass a function to setState, you get the previous state as an argument
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value, // convert to number (using +)
      second: prevNumbers.second
    }));
  }

  const changeSecondNumberHandler = (event) => {
    
    // if you pass a function to setState, you get the previous state as an argument
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value // convert to number (using +)
    }));
  }

  const changeCalculationHandler = (event) => {

    // event.target.value is the value of the selected option
    setChosenCalculation(event.target.value);
  }

  const calculateResult = () => {

    let result = 0;

    if (chosenCalculation === 'add') {
      result = enteredNumbers.first + enteredNumbers.second;
    } else if (chosenCalculation === 'subtract') {
      result = enteredNumbers.first - enteredNumbers.second;
    } else if (chosenCalculation === 'multiply') {
      result = enteredNumbers.first * enteredNumbers.second;
    } else if (chosenCalculation === 'divide') {
      result = enteredNumbers.first / enteredNumbers.second;
    }

    return result;
  }

  return (
    <div>
      <h1>React Calculator</h1>
      <Calculation
        onFirstNumberChanged={changeFirstNumberHandler}
        onSecondNumberChanged={changeSecondNumberHandler}
        onOperationChanged={changeCalculationHandler}
      />
      <Result calculationResult={calculateResult()} />
    </div>
  );
}

export default App;
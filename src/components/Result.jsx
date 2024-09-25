/* eslint-disable react/prop-types */

export default function Result({ firstNumber, operator, secondNumber, result, setResult, setStoredNumber, recallStoredNumber  }) {

    function calculate() {
      switch (operator) {
        case ('+'):
          setResult(parseInt(firstNumber) + parseInt(secondNumber));
          break
        case ('-'):
          setResult(parseInt(firstNumber) - parseInt(secondNumber));
          break
        case ('*'):
          setResult(parseInt(firstNumber) * parseInt(secondNumber));
          break
        case ('/'):
          setResult(parseInt(firstNumber) / parseInt(secondNumber));
          break
      }
    }
  
    return (
        <div className="panel">
          <p> { result } </p>
          <div className="numbers">
            <button onClick={ calculate }>=</button>
            <button onClick={() => setStoredNumber(result)}> Store </button>
            <button onClick={() => recallStoredNumber(3)}> Recall </button>
          </div>
        </div>
      )
  }
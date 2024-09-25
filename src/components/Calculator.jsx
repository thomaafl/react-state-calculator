
import FirstNr from "./FirstNr"
import SecondNr from "./SecondNr"
import Operator from "./Operator"
import Result from "./Result"
import { useState } from "react"


function Calculator() {
    const [firstNumber, setFirstNumber] = useState('0');
    const [op, setOp] = useState('');
    const [secondNumber, setSecondNumber] = useState('0');
    const [result, setResult] = useState(0);
    const [storedNumber, setStoredNumber] = useState('');

    const updateFirstNumber = (number) => {
        if (firstNumber === '0') {
            if (number === '0') {
                return;
            } 
            setFirstNumber(number);
            return;
        } else if (number === '') {
            setFirstNumber('0');
            return;
        }
        setFirstNumber(firstNumber + number);
    }

    const updateSecondNumber = (number) => {
        if (secondNumber === '0') {
            if (number === '0') {
                return;
            } 
            setSecondNumber(number);
            return;
        } else if (number === '') {
            setSecondNumber('0');
            return;
        }
        setSecondNumber(secondNumber + number);
    }

    const recallStoredNumber = (inputNumber) => {
        /*
        Parameters
        1 - First number
        2 - Second number
        3 - Results
        */
        if (inputNumber === 1) {
            setFirstNumber(storedNumber);
        } else if (inputNumber === 2) {
            setSecondNumber(storedNumber);
        } else if (inputNumber === 3) {
            setResult(storedNumber);
        } else {
            return 'An error occured.';
        }
    }

    return (    
        <div className="calculator">
            < FirstNr 
            number={firstNumber} 
            onValueChange={updateFirstNumber}
            setStoredNumber={setStoredNumber}
            recallStoredNumber={recallStoredNumber}/>

            < Operator 
            op={op} 
            setOp={setOp}/>

            < SecondNr 
            number={secondNumber} 
            onValueChange={updateSecondNumber}
            setStoredNumber={setStoredNumber}
            recallStoredNumber={recallStoredNumber}/>

            < Result 
            firstNumber={firstNumber} 
            operator={op} 
            secondNumber={secondNumber} 
            result={result} 
            setResult={setResult}
            setStoredNumber={setStoredNumber}
            recallStoredNumber={recallStoredNumber}/>
        </div>
    )
}

export default Calculator;
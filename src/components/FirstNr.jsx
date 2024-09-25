/* eslint-disable react/prop-types */


export default function FirstNr({ number, onValueChange, setStoredNumber, recallStoredNumber }) {
    return (
    <div className="panel">
        <p> { number } </p>
        <div className="numbers">
          <button onClick={() => onValueChange('1')}> 1 </button>
          <button onClick={() => onValueChange('2')}> 2 </button>
          <button onClick={() => onValueChange('3')}> 3 </button>
          <button onClick={() => onValueChange('4')}> 4 </button>
          <button onClick={() => onValueChange('5')}> 5 </button>
          <button onClick={() => onValueChange('6')}> 6 </button>
          <button onClick={() => onValueChange('7')}> 7 </button>
          <button onClick={() => onValueChange('8')}> 8 </button>
          <button onClick={() => onValueChange('9')}> 9 </button>
          <button onClick={() => onValueChange('0')}> 0 </button>
          <button onClick={() => onValueChange('')}> Clear </button>
          <button ></button> 
          <button onClick={() => setStoredNumber(number)}> Store </button>
          <button onClick={() => recallStoredNumber(1)}> Recall </button>
        </div>
      </div>
    )
}
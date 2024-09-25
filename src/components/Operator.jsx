
export default function Operator({ op, setOp}) {

    return (
        <div className="panel">
            <p> {op} </p>
            <div className="numbers">
            <button onClick={() => setOp('+')}> + </button>
            <button onClick={() => setOp('-')}> - </button>
            <button onClick={() => setOp('*')}> * </button>
            <button onClick={() => setOp('/')}> ÷ </button>
            </div>
        </div>
    )
}

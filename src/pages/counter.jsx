import { useState } from "react"
import CounterBtn from "../components/counterBtn"

const Counter = () => {

    const [num, setNum] = useState(0)
    const [warning, setWarning] = useState(false)

    return (
        <>
            <h1 className="title" id="Counter">Counter Application</h1>
            <div className="container">
                <p className="number__title">Current Count</p>
                <h1 className="number">⚞ <span>{num}</span> ⚟</h1>
                <CounterBtn setNum={setNum} num={num} warnning={warning} setWarning={setWarning} />
                {
                    warning && (<p className="warn">Minimum Limit Reached!</p>
                    )}
                <div className="feature">
                    <div>
                        <p className="fast__icon">🗲</p>
                    </div>
                    <div>
                        <h5>Quick Counter</h5>
                        <small>Tap ⮜ or ⮞ to count. Reset Anytime</small>
                    </div>
                </div>
            </div>
            <p className="luck__msg">───── ❤︎ Good Luck! ─────</p>
        </>
    )
}

export default Counter
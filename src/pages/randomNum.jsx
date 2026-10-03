import { useState } from "react"

const RandomNum = () => {
    const [random, setRandom] = useState(0)
    const [empty , setEmpty] = useState(true)

    const handleRandomNo = () => {
        let randomNumber = Math.floor(Math.random()*100)+1
        setRandom(randomNumber)
        setEmpty(false)
    }

    return (
        <>
            <h1 className="title">Random Number Generator</h1>
            <div className="container">
                <p className="task__explain">Click the button to generate a random number between 1 to 100</p>
                <h1 className="number">⚞ <span>{random}</span> ⚟</h1>
                <button onClick={handleRandomNo}><i className="fa-solid fa-dice"></i> <span className="btn-span">Generate Number</span>  ⬩➤</button>
                
                {
                    empty?
                    <p className="warn">No number generated yet.</p> :
                    <small><i className="fa-solid fa-circle-info"></i> The number will be between 1 to 100</small>
                }
            </div>
             <p className="luck__msg">───── ❤︎ Good Luck! ─────</p>
        </>
    )
}

export default RandomNum
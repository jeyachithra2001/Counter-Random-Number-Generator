const CounterBtn = (props) => {

    const handleInc = () => {
        props.setNum(prev=> prev + 1)
        props.setWarning(false)
    }
    const handleDec = () => {
        if(props.num === 0){
            props.setWarning(true)
            return
        }
        props.setNum(prev=> prev - 1)
    }

    const handleReset = () => {
        props.setNum(0)
        props.setWarning(false)
    }

    return(
        <>
            <div className="incdecFlex">
                <button onClick={handleDec} disabled={props.num === 0 && props.warning}>⮜</button>
                <button onClick={handleInc}>⮞</button>
            </div>
            <div>
                <button onClick={handleReset}>⟲  Reset</button>
            </div>
        </>
    )
}

export default CounterBtn
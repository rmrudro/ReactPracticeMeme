import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Add functionality to the minus button
     */
    const [count, setCount] = React.useState(0)
    
    // function add() {
    //     setCount(count + 1)  Old Version
    // }
    // function decrease() {
    //     setCount(count-1)
    // }
    
    // function add() {
    //     setCount(function(oldvalue){ Another Old Version
    //         return oldvalue+1
    //     })
    // }
    // function decrease() {
    //     setCount(function(oldvalue){
    //         return oldvalue-1
    //     })
    // }

    function add() {
        setCount(prevCount=>prevCount+1)
    }
    function decrease() {
        setCount(prevCount=>prevCount-1)
    }


    return (
        <div className="counter">
            <button className="counter--minus" onClick={decrease}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

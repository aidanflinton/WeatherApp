import React from "react"

/*
class CounterBox extends React.component {
    render() {
        return (
            <>
                <p>{this.props.counter}</p>
                <button onClick={() => this.props.setCounter(this.props.counter + 1)}> Increment </button>
            </>
        )
    }
}
*/

const CounterBox = (props) => {
    const counter = props.counter;
    return (
        <>
            <p>{counter}</p>
            <button onClick={() => props.setCounter(counter + 1)}> Increment </button>
        </>
    )
}

export default CounterBox;
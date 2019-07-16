// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {


    render() {
        return (
            <div>
                <input type="password" onKeyUp = {this.handleKeyUp}></input>
            </div>
        )
    }

    handleKeyUp = () => {
        console.log("Entering password...")
    }
}
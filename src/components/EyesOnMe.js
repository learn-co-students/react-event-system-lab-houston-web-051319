// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

    render() {
        return (
            <div>
                <button onFocus = {this.handleOnFocus} onBlur = {this.handleOnBlur}></button>
            </div>
        )
    }

    handleOnFocus = () => {
        console.log('Good!')
    }

    handleOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }
}

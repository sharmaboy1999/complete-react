import React, { Component } from 'react'

export class Classclick extends Component {

clickHandler(){
    console.log('clicked successfully');
}

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default Classclick

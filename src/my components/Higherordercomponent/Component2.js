import React, { Component } from 'react'
import Component1 from './Component1'

export class Component2 extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            
                <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
            
        )
    }
}

export default  Component1(Component2)

import React, { Component } from 'react'
import Component1 from './Component1'

export class Component3 extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default Component1(Component3)

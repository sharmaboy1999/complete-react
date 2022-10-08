import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export class Parentcomponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentname: 'Parent'
        }

        this.newparent = this.newparent.bind(this)
    }


    newparent() {
        alert(`hello ${this.state.parentname}`)
    }


    render() {
        return (
            <div>
                <Childcomponent newhandler={this.newparent} />
            </div>
        )
    }
}

export default Parentcomponent

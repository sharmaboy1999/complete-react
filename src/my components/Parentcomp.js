import React, { Component } from 'react'
import Regularcomponent from './Regularcomponent'
import Purecomponent from './Purecomponent'
import Memocomponent from './Memocomponent'

export class Parentcomp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'sumit'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'sumit'
            })
        }, 4000);
    }


    render() {
console.log("parent comp render");
        return (
            <div>
                Parent Component
                {/* <Regularcomponent name={this.state.name} /> */}
                {/* <Purecomponent name={this.state.name} /> */}
                <Memocomponent name={this.state.name} />
            </div>
        )
    }
}




    export default Parentcomp

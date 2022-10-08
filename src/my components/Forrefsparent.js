import React, { Component } from 'react'
import Forrefs from './Forrefs'

export class Forrefsparent extends Component {

constructor(props) {
    super(props)

    this.inputRef = React.createRef()
}

clickhandler =()=>{
    this.inputRef.current.focus()
}

    render() {
        return (
            <div>
                <Forrefs  ref={this.inputRef}/>
                <button onClick={this.clickhandler}> focus input</button>
                
            </div>
        )
    }
}

export default Forrefsparent

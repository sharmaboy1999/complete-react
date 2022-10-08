import React, { Component } from 'react'

export class Refsdemo extends Component {
    constructor(props) {
        super(props)
    this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
    
clickhandler =()=>{
    alert(this.inputRef.current.value)
}

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickhandler}>click now</button>
            </div>
        )
    }
}

export default Refsdemo

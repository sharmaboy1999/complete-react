import React, { Component } from 'react'

export class Eventbind extends Component {

constructor(props) {
    super(props)

    this.state = {
         message:'hello bro'
    }
}

// clickhandler(){
//     this.setState({
//         message:'goodbye!'
//     })
//     console.log(this);
// }

clickhandler =()=>{
    this.setState({
        message:'goodbye!'
    })
}

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}>click now</button> */}
                {/* <button onClick={()=>this.clickhandler()}>click now</button> */}
                <button onClick={this.clickhandler}>click now</button>
            </div>
        )
    }
}

export default Eventbind

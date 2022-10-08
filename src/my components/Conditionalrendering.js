import React, { Component } from 'react'

export class Conditionalrendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isloggedin: true
        }
    }


    render() {
        return this.state.isloggedin?(
            <div>welcome sumit</div>
        ):(
            <div>welcome guest</div>
        )

        // let message
        // if (this.state.isloggedin) {
        //     message = <div>welcome sumit</div>
        // } else {
        //     message= <div>welcome guest</div>
        // }

        // return <div> {message} </div>


        // if (this.state.isloggedin) {
        //     return (
        //         <div>welcome sumit</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>welcome guest</div>
        //     )
        // }


        // return (
        //     <div>
        //         <div>welcome sumit</div>
        //         <div>welcome guest</div>
        //     </div>
        // )
    }
}

export default Conditionalrendering

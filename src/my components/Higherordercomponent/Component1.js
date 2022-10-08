import React, { Component } from 'react'

const Component1 = (WrappedComponent, ) => {
    class Component1 extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            console.log('HOC', this.props.name)
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props.name}
                />
            )
        }
    }

    return Component1
}


export default Component1

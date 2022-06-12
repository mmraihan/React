import React, { Component } from 'react'

export default class HOOKS_USESTATE extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    render() {
        const { count } = this.state
        return (

            <div>
                <h1>Count: {count}</h1>
                <button onClick={this.handle}>Increment</button>
            </div>
        )
    }

    handle = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

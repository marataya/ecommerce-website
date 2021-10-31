import React, { Component } from 'react'

export default class Lifecycles extends Component {
    constructor() {
        super()
        console.log('====================================');
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps);
        return true;
    }

    componentWillUnmount() {console.log('componentWillUnmount');}

    render() {
        console.log("Render")

        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

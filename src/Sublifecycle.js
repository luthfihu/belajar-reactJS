import React, { Component } from 'react'

export default class Sublifecycle extends Component {

    componentWillUnmount() {
        this.props.ubahMakanan("Bakmie")
    }

    render() {
        return (
            <div>
                <h2>Component Sub</h2>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Operan extends Component {

    render() {
        const { makanan, gantiMakanan } = this.props 
        return (
            <div>
                <h2>Operan state yang menjadi Props : {makanan}</h2>
                <button onClick= {() => gantiMakanan("soto")}>ganti makanan</button> 
            </div>
        )
    }
}

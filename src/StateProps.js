import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan : "bakso"
        } 
    }

    gantiMakanan = (newMakanan) => {
        this.setState({
            makanan : newMakanan
        })
    }

    render() {
        const { makanan } = this.state
        return (
            <div>
                <h2>{makanan}</h2>
                <button onClick= {() => this.gantiMakanan("soto")}>ganti makanan</button>
                <Operan makanan={makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}

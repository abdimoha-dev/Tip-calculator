import React, { Component } from 'react';
import './App.js';
class Calc extends Component{
    render(){
        return (
            <div>
                {this.props.level}
            </div>

        );
    }
}

export default Calc;
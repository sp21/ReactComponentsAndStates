import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h1>Hi Im child component inside parent component</h1>
                <h3>Im child rendered in parent component {this.props.action}</h3>
            </div>
        );
    }
}

export default Child;
import React, { Component } from 'react';
import { ChildCom } from "./ChildCom2"

export default class ParentCom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.familyValue
        }
    }

    render() {
        return (
            <ChildCom stateValue={this.state.name} onChildClick={(data) => this.props.onParentCall(data)}>
                <div>
                    <h1>hai am parent {this.props.familyValue}</h1>
                </div>
            </ChildCom>
        )
    }
}
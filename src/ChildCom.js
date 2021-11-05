import React, {Component} from 'react';
import ParentCom from './ChildCom1';

class FamilyParent extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "hai Hello"
        }
    }
    render() {
        return (
            <div>
                FamilyParent
                <ParentCom familyValue={this.state.value} onParentCall={(data) => this.setState({value: data})} />
            </div>
        )
    }
}

export default FamilyParent;
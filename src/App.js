import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {name: "Ema"}
    this.OnSubmit = this.OnSubmit.bind(this);
  }

  OnSubmit(){
   console.log("on click work");
   this.setState({
     name: "chalan"
   })
  }

  render(){
  return (
    <div className="App">
      {this.state.name}
      <button onClick={this.OnSubmit}>
        Submit
      </button>
    </div>
  );
  }
}

export default App;

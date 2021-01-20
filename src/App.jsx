import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import './components/DisplayBox.css';
import * as math from 'mathjs';
import fire from './components/fire';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  // This allows for values to be inputted to the top of the calculator

  addToInput = val => {
    this.setState({input: this.state.input + val})
  };

  // This evaluates the arithmetic equations that are inputed through function input()

  handleEquals = () => {
    this.setState({input: math.evaluate(this.state.input)});
  };

  handleResult = () => {
    // This is was a function I was trying to implement to allow for values that are
    // created from the handleEquals() function to be sent to my firebase database
    //let KKK = this.setState({input: math.evaluate(this.state.input)});

    // I also tried doing this instead to only allow for 10 total values to be stored at a time
    // in the firebase, I could use advice on how to actually get this to work
    // If push isn't empty, it usually causes the errors, but I think I might be passing in the wrong variable when I do try it
    let resultRef = fire.database().ref('result').orderByKey().limitToLast(10);
    fire.database().ref('result').push();
  };

  // Note to Alisha, If possible, I want to be able to make it so when you evaluate a artithimetic equation,
  // it automatically stores the value, rather then have the seperate button "🥴" that sends the value to firebase




  render() {
    return (
      <div className="app">
      <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
        <div className="row">
        <Button handleClick={this.addToInput}>7</Button>
        <Button handleClick={this.addToInput}>8</Button>
        <Button handleClick={this.addToInput}>9</Button>
        <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={this.handleEquals}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
          <Button handleClick={this.handleResult}>🥴</Button> 
          </div>
        <div className="row">
          <ClearButton handleClear={() => this.setState({input: ""})}>Clear</ClearButton>
        </div>
        <div className="DisplayBox">Results: </div>
      </div>
      </div>);
  }
}

export default App;
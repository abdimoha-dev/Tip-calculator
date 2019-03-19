import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // Define your state object here
    this.state = {
      bil: 0,
      NumberOfPeople: 0,
      serviceQual: 0
    }
  }

  handleBill(event) {
    this.setState({bil: event.target.value})
    
  }
  handlePeople(event){
    this.setState({NumberOfPeople: event.target.value})
  }

  handleService(event){
    this.setState({serviceQual: event.target.value})
  }
  

  render() {
    const bill = 'How much was your bill?';
    const Service_quality = 'How was your service?';
    const NumberOfPeople = 'How many people are sharing the bill?'

    return (
      <div id="container">
        <h1>Tip Calculator</h1>
        <form>
          <p>{bill}</p>
          $ <input id="billamount" name='bill' value={this.state.bil}  type="text" placeholder="Bill Amount" onChange={this.handleBill.bind(this)}/>
          <p>{Service_quality}</p>
          <p>
            <select id="serviceQual" name='serviceQual' value={this.state.serviceQual} onChange={this.handleService.bind(this)}>
              <option disabled selected value="0">-- Choose an Option --</option>
              <option value="0.3">30&#37; &#45; Outstanding</option>
              <option value="0.2">20&#37; &#45; Good</option>
              <option value="0.15">15&#37; &#45; It was OK</option>
              <option value="0.1">10&#37; &#45; Bad</option>
              <option value="0.05">5&#37; &#45; Terrible</option>
            </select>
          </p>
          <p>{NumberOfPeople}</p>
          <input id="peopleamt" name='NumberOfPeople' value={this.state.NumberOfPeople} onChange={this.handlePeople.bind(this)} type="text" placeholder="Number of People" />
          {/* <p><button onClick={this.handleChange}>Calculate!</button></p> */}
          <p><button>Calculate!</button></p>

        </form>

        <div id="totalTip">
          <sup>$</sup><span id="tip">0.00</span>
          The Bill is: {this.state.serviceQual}
          <small id="each">each</small>
        </div>
      </div>
    );
  }
}

export default App;

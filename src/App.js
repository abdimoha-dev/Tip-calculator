import React, { Component } from 'react';
import './App.css';
import Calc from './Calc';

class App extends Component {
  render() {
    const bill = 'How much was your bill?';
    const Service_quality = 'How was your service?';
    const NumberOfPeople = 'How many people are sharing the bill?'

    return (

      <div id="container">
        <h1>Tip Calculator</h1>
        <form>
          <p>{bill}</p>
          $ <input id="billamt" type="text" placeholder="Bill Amount" />
          <p>{Service_quality}</p>
          <p>
            <select id="serviceQual">
              <option disabled selected value="0">-- Choose an Option --</option>
              <option value="0.3">30&#37; &#45; Outstanding</option>
              <option value="0.2">20&#37; &#45; Good</option>
              <option value="0.15">15&#37; &#45; It was OK</option>
              <option value="0.1">10&#37; &#45; Bad</option>
              <option value="0.05">5&#37; &#45; Terrible</option>
            </select>
          </p>
          <p>{NumberOfPeople}</p>
          <input id="peopleamt" type="text" placeholder="Number of People" />
          <p><button type="button" id="calculate">Calculate!</button></p>
        </form>

        <div id="totalTip">
          <sup>$</sup><span id="tip">0.00</span>
          <small id="each">each</small>
        </div>
        <div>
          <Calc>name={"Charmander"} level={5} hp={21}</Calc>
        </div>
      </div>
    );
  }
}

export default App;

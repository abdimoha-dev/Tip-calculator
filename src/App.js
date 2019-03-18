import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
      <h1>Tip Calculator</h1>
      <form>
        <p>How much was your bill?</p>
        $ <input id="billamt" type="text" placeholder="Bill Amount"/>
        <p>How was your service?</p>
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
        <p>How many people are sharing the bill?</p>
        <input id="peopleamt" type="text" placeholder="Number of People"/>
        <p><button type="button" id="calculate">Calculate!</button></p>
      </form>

      <div id="totalTip">
         <sup>$</sup><span id="tip">0.00</span>
         <small id="each">each</small>
       </div>    
      </div>
    );
  }
}

export default App;

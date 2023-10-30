import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adultTickets: 0,
      childTickets: 0,
      ticketPrice: {
        adult: 349,
        child: 249,
      },
    };
  }

  incrementAdultTickets = () => {
    this.setState((prevState) => ({
      adultTickets: Math.min(prevState.adultTickets + 1, 9),
    }));
  };

  decrementAdultTickets = () => {
    this.setState((prevState) => ({
      adultTickets: Math.max(prevState.adultTickets - 1, 0),
    }));
  };

  incrementChildTickets = () => {
    this.setState((prevState) => ({
      childTickets: Math.min(prevState.childTickets + 1, 10),
    }));
  };

  decrementChildTickets = () => {
    this.setState((prevState) => ({
      childTickets: Math.max(prevState.childTickets - 1, 0),
    }));
  };
  
  render() {
    const { adultTickets, childTickets, ticketPrice } = this.state;
    const totalCost = adultTickets * ticketPrice.adult + childTickets * ticketPrice.child;

    return (
      
      <div className="APP"><i>
        <h1><p>61-64's MovieSquare Ltd.,</p> </h1><h2><p><u>OMG 2</u></p> </h2>
        <h2>Movie Ticket Booking</h2>
        <div className="ticket-section">
          <div className="ticket-type">
            <p><b>Adult Ticket</b> (₹{ticketPrice.adult})</p>
            <button onClick={this.incrementAdultTickets}>+</button>
            <span>{adultTickets}</span>
            <button onClick={this.decrementAdultTickets}>-</button>
          </div>
          <div className="ticket-type">
            <p><b>Child Ticket</b> (₹{ticketPrice.child})</p>
            <button onClick={this.incrementChildTickets}>+</button>
            <span>{childTickets}</span>
            <button onClick={this.decrementChildTickets}>-</button>
          </div>
        </div>
        <p className="total-cost"><b>Total Cost: ₹{totalCost.toFixed(2)}</b></p></i>
      </div>
    );
  }
}
export default App;

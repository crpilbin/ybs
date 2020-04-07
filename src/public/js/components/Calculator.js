import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      deposit: 10,
      value: 200000,
      interest: 10,
      term: 30,
      result: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let calculatedResult = this.calculate(
      this.state.deposit,
      this.state.value,
      this.state.interest,
      this.state.term
    );
    this.setState({ result: calculatedResult });
  }

  calculate(deposit, value, repayment, term) {
    let loan = value - deposit;
    return (
      (repayment /
        100 /
        12 /
        (1 - Math.pow(1 + repayment / 100 / 12, -term * 12))) *
      loan
    );
  }
  render() {
    return (
      <>
        <div className="result">{this.state.result}</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="deposit">Deposit</label>
          <input
            value={this.state.deposit}
            onChange={this.handleChange}
            name="deposit"
            type="text"
          />
          <label htmlFor="value">Property Value</label>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            name="value"
            type="text"
          />
          <label htmlFor="interest">Interest Repayment</label>
          <input
            value={this.state.interest}
            onChange={this.handleChange}
            name="interest"
            type="text"
          />
          <label htmlFor="term">Mortgage Term</label>
          <input
            value={this.state.term}
            onChange={this.handleChange}
            name="term"
            type="text"
          />
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default Calculator;

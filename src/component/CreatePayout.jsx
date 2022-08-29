import { Component } from "react";
import BasicDatePicker from "./utility/DatePicker";
import CreateDeposit from "./CreateDeposit";
import DepositList from "./DepositList";

const employees = [
  { id: 96, firstName: "Art", lastName: "Diaz" },
  { id: 69, firstName: "Morgen", lastName: "Diaz" },
  { id: 23, firstName: "Penny", lastName: "Jo" },
];

class CreatePayout extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      deposits: [],
    };
  }

  handleDateSelected = (date) => {
    this.setState({ date: date });
  };

  onAddDeposit = (deposit) => {
    console.log(deposit);
    const updatedDeposits = [...this.state.deposits, deposit];
    this.setState({ deposits: updatedDeposits }, () => {
      console.log(this.deposits);
    });
  };

  render() {
    return (
      <div>
        <BasicDatePicker onDateSelected={this.handleDateSelected} />
        <CreateDeposit
          employees={employees}
          handleAddDeposit={this.onAddDeposit}
        />
        <DepositList deposits={this.state.deposits} employees={employees} />
      </div>
    );
  }
}

export default CreatePayout;

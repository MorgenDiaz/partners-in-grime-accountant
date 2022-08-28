import { Component } from "react";
import CreateDeposit from "./CreateDeposit";
import BasicDatePicker from "./utility/DatePicker";

const employees = [
  { id: 96, firstName: "Art", lastName: "Diaz" },
  { id: 69, firstName: "Morgen", lastName: "Diaz" },
  { id: 23, firstName: "Penny", lastName: "Jo" },
];

class CreatePayout extends Component {
  constructor() {
    super();
    this.date = new Date();
    this.deposits = [];
  }

  handleDateSelected = (date) => {
    this.setState({ date: date });
  };

  onAddDeposit = (deposit) => {
    this.setState({ deposits: [...this.deposits, deposit] });
  };

  render() {
    return (
      <div>
        <BasicDatePicker onDateSelected={this.handleDateSelected} />
        <CreateDeposit
          employees={employees}
          handleAddDeposit={this.onAddDeposit}
        />
      </div>
    );
  }
}

export default CreatePayout;

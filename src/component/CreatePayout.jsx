import { Component } from "react";
import BasicDatePicker from "./utility/DatePicker";
import LabeledNumberInput from "./utility/LabeledNumberInput";
import CreateDeposit from "./CreateDeposit";
import DepositList from "./DepositList";

const taxPercentage = 30;
const businessPercentage = 15;

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
      taxPercentage: taxPercentage,
      businessPercentage: businessPercentage,
      deposits: [],
    };
  }

  handleDateSelected = (date) => {
    this.setState({ date: date });
  };

  handleTaxPercentageChanged = (percentage) => {
    this.setState({ taxPercentage: percentage });
  };

  handleBusinessPercentageChanged = (percentage) => {
    this.setState({ businessPercentage: percentage });
  };

  handleAddDeposit = (deposit) => {
    const updatedDeposits = [...this.state.deposits, deposit];
    this.setState({ deposits: updatedDeposits });
  };

  handleDeleteDeposit = (index) => {
    const updatedDeposits = this.state.deposits.filter(
      (deposit, i) => i !== index
    );

    this.setState({ deposits: updatedDeposits });
  };

  render() {
    return (
      <div>
        <BasicDatePicker onDateSelected={this.handleDateSelected} />
        <LabeledNumberInput
          id="tax-percentage"
          label="Tax"
          startAdornment="%"
          wholeNumbersOnly={true}
          onChange={this.handleTaxPercentageChanged}
          value={this.state.taxPercentage}
        />
        <LabeledNumberInput
          id="business-percentage"
          label="Business"
          startAdornment="%"
          wholeNumbersOnly={true}
          onChange={this.handleBusinessPercentageChanged}
          value={this.state.businessPercentage}
        />
        <CreateDeposit
          employees={employees}
          handleAddDeposit={this.handleAddDeposit}
        />
        <DepositList
          deposits={this.state.deposits}
          employees={employees}
          onDeleteClicked={this.handleDeleteDeposit}
        />
      </div>
    );
  }
}

export default CreatePayout;

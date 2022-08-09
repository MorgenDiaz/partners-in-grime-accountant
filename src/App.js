import "./App.css";
import { Component } from "react";

import Check from "./model/check";
import CheckCreation from "./component/check-creation.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      taxPercentage: 0,
      businessPercentage: 0,
      deposit: 0.0,
      checkStub: {
        grossDepositAmount: 0.0,
        taxPercentage: 0,
        businessPercentage: 0,
        taxWithheld: 0.0,
        businessWitheld: 0.0,
        payable: 0.0,
      },
    };
  }

  removeLastChar(inStr) {
    return inStr.substring(0, inStr.length - 1);
  }

  isWholeNumber(inStr) {
    return Number.isInteger(Number(inStr));
  }

  onTaxPercentChanged = (event) => {
    let input = event.target.value;

    if (!this.isWholeNumber(input)) {
      event.target.value = this.removeLastChar(input);
      return;
    }

    this.setState({ taxPercentage: Number(input) });
  };

  onBusinessPercentChanged = (event) => {
    let input = event.target.value;

    if (!this.isWholeNumber(input)) {
      event.target.value = this.removeLastChar(input);
      return;
    }

    this.setState({ businessPercentage: Number(input) });
  };

  onDepositAmountChanged = (event) => {
    let input = event.target.value;

    if (Number.isNaN(Number(input))) {
      event.target.value = this.removeLastChar(input);
      return;
    }

    this.setState({ deposit: Number(input) });
  };

  onCalculateCheckClicked = () => {
    const { taxPercentage, businessPercentage, deposit } = this.state;
    let check = new Check(taxPercentage, businessPercentage);
    check.addDeposit(deposit);
    const checkStub = check.calculateCheck();
    this.setState({ checkStub: checkStub });
  };

  render() {
    const {
      grossDepositAmount,
      taxPercentage,
      businessPercentage,
      taxWithheld,
      businessWitheld,
      payable,
    } = this.state.checkStub;
    return (
      <div className="App">
        <header className="App-header"></header>

        <CheckCreation
          onTaxPercentChanged={this.onTaxPercentChanged}
          onBusinessPercentChanged={this.onBusinessPercentChanged}
          onDepositAmountChanged={this.onDepositAmountChanged}
          onCalculateCheckClicked={this.onCalculateCheckClicked}
          deposit={grossDepositAmount}
          tax={taxPercentage}
          business={businessPercentage}
          taxDeducted={taxWithheld}
          businessDeducted={businessWitheld}
          payable={payable}
        ></CheckCreation>
      </div>
    );
  }
}

export default App;

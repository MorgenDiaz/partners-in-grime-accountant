import "./App.css";
import { Component } from "react";

import MainMenu from "./component/MainMenu";
import EstimateNetPay from "./component/EstimateNetPay";
import CreateDeposit from "./component/CreateDeposit";

/* 
  @todo Can not navigate back to menu.
*/
class App extends Component {
  constructor() {
    super();

    this.state = {
      route: "main_menu",
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

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  route = (route) => {
    switch (route) {
      case "main_menu":
        return <MainMenu routeChangeHandler={this.onRouteChange} />;
      case "estimate_net":
        return <EstimateNetPay></EstimateNetPay>;
      case "new_payout":
        return <CreateDeposit />;
      default:
        return <h1>Routing Error</h1>;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        {this.route(this.state.route)}

        {/* <CheckCreation
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
        ></CheckCreation> */}
      </div>
    );
  }
}

export default App;

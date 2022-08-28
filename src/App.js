import "./App.css";
import { Component } from "react";

import MainMenu from "./component/MainMenu";
import EstimateNetPay from "./component/EstimateNetPay";
import { Link } from "@mui/material";
import CreatePayout from "./component/CreatePayout";

class App extends Component {
  constructor() {
    super();

    this.state = {
      route: "main_menu",
      navigationEnabled: false,
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

  updateNavigation = (route) => {
    if (route === "main_menu") {
      this.setState({ navigationEnabled: false });
    } else if (!this.state.navigationEnabled) {
      this.setState({ navigationEnabled: true });
    }
  };

  onRouteChange = (route) => {
    this.updateNavigation(route);
    this.setState({ route: route });
  };

  route = (route) => {
    switch (route) {
      case "main_menu":
        return <MainMenu routeChangeHandler={this.onRouteChange} />;
      case "estimate_net":
        return <EstimateNetPay></EstimateNetPay>;
      case "new_payout":
        return <CreatePayout />;
      default:
        return <h1>Routing Error</h1>;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.navigationEnabled ? (
            <nav>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  this.onRouteChange("main_menu");
                }}
              >
                Menu
              </Link>
            </nav>
          ) : (
            ""
          )}
        </header>

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

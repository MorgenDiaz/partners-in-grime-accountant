import "./App.css";
import { Component } from "react";
import { InputLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { Grid, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import BasicDatePicker from "./component/date-picker";
import Check from "./model/check";
import CheckStub from "./component/check-stub";

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
    return (
      <div className="App">
        <header className="App-header"></header>

        <Grid
          container
          sx={{ p: 4 }}
          sy={{ p: 4 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <BasicDatePicker></BasicDatePicker>
          </Grid>

          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
          >
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="tax-percentage">Tax</InputLabel>
                <OutlinedInput
                  id="tax-percentage"
                  label="Tax"
                  placeholder="0"
                  startAdornment={
                    <InputAdornment position="start">%</InputAdornment>
                  }
                  onChange={this.onTaxPercentChanged}
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl>
                <InputLabel htmlFor="business-percentage">Business</InputLabel>
                <OutlinedInput
                  id="business-percentage"
                  label="Business"
                  placeholder="0"
                  startAdornment={
                    <InputAdornment position="start">%</InputAdornment>
                  }
                  onChange={this.onBusinessPercentChanged}
                  size="small"
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
          >
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="deposit-input">Deposit Amount</InputLabel>

                <OutlinedInput
                  id="deposit-input"
                  label="Deposit Amount"
                  placeholder="0"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  onChange={this.onDepositAmountChanged}
                />
              </FormControl>
            </Grid>

            <Grid item>
              <Button variant="outlined" onClick={this.onCalculateCheckClicked}>
                Calculate Check
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
          >
            <CheckStub
              deposit={this.state.checkStub.grossDepositAmount}
              tax={this.state.checkStub.taxPercentage}
              business={this.state.checkStub.businessPercentage}
              taxDeducted={this.state.checkStub.taxWithheld}
              businessDeducted={this.state.checkStub.businessWitheld}
              payable={this.state.checkStub.payable}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

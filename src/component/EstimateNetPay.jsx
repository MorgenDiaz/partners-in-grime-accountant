import { Component } from "react";
import { Grid, Button } from "@mui/material";

import Check from "../model/check";

import LabeledNumberInput from "./utility/LabeledNumberInput";
import CheckStub from "./CheckStub";
import DurationPicker from "./utility/duration-picker/DurationPicker";
import { timeToFloat } from "../model/util";

const blankStub = {
  grossDepositAmount: 0.0,
  taxPercentage: 0,
  businessPercentage: 0,
  taxWithheld: 0.0,
  businessWitheld: 0.0,
  payable: 0.0,
};

class EstimateNetPay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taxPercentage: 30,
      businessPercentage: 15,
      payees: 1,
      time: 1,
      depositAmount: 0,
      checkStub: blankStub,
    };
  }

  onTaxPercentChanged = (inputPercentage) => {
    this.setState({ taxPercentage: inputPercentage });
  };

  onBusinessPercentChanged = (inputPercentage) => {
    this.setState({ businessPercentage: inputPercentage });
  };

  onPayeesChanged = (inputPayees) => {
    this.setState({ payees: inputPayees });
  };

  onTimeEstimateChanged = (time) => {
    this.setState({ time: timeToFloat(time.hours, time.minutes) });
  };

  onDepositAmountChanged = (inputAmount) => {
    this.setState({ depositAmount: inputAmount });
  };

  onCalculateCheckClicked = () => {
    const { taxPercentage, businessPercentage, depositAmount } = this.state;
    let check = new Check(taxPercentage, businessPercentage);
    check.addDeposit(depositAmount);
    const checkStub = check.calculateCheck();
    this.setState({ checkStub: checkStub });
  };

  render() {
    const { checkStub } = this.state;

    return (
      <Grid
        container
        sx={{ p: 4 }}
        sy={{ p: 4 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
      >
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
            <LabeledNumberInput
              id="tax-percentage"
              label="Tax"
              startAdornment="%"
              wholeNumbersOnly={true}
              onChange={this.onTaxPercentChanged}
              value={this.state.taxPercentage}
            />
          </Grid>

          <Grid item>
            <LabeledNumberInput
              id="business-percentage"
              label="Business"
              startAdornment="%"
              wholeNumbersOnly={true}
              onChange={this.onBusinessPercentChanged}
              value={this.state.businessPercentage}
            />
          </Grid>
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
            <LabeledNumberInput
              id="payees"
              label="Split between people"
              startAdornment="#"
              wholeNumbersOnly={true}
              onChange={this.onPayeesChanged}
              value={this.state.payees}
            />
          </Grid>

          <Grid item>
            <DurationPicker
              onChange={this.onTimeEstimateChanged}
              initialDuration={{ hours: 1, minutes: 0 }}
              noSeconds={true}
            />
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
            <LabeledNumberInput
              id="deposit-amount"
              label="Deposit Amount"
              startAdornment="$"
              value={this.state.depositAmount}
              onChange={this.onDepositAmountChanged}
            />
          </Grid>

          <Grid item>
            <Button variant="outlined" onClick={this.onCalculateCheckClicked}>
              Calculate Check
            </Button>
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
          <CheckStub
            deposit={checkStub.grossDepositAmount}
            tax={this.state.taxPercentage}
            business={this.state.businessPercentage}
            taxDeducted={checkStub.taxWithheld}
            businessDeducted={checkStub.businessWitheld}
            payable={checkStub.payable}
          />
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
          <h2>{`Hourly: $${(
            checkStub.payable /
            this.state.time /
            this.state.payees
          ).toFixed(2)}`}</h2>
        </Grid>
      </Grid>
    );
  }
}

export default EstimateNetPay;

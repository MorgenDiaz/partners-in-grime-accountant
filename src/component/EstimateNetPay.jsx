import { Component } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Check from "../model/check";

import LabeledNumberInput from "./utility/LabeledNumberInput";
import CheckStub from "./check-stub.component";

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

  onDepositAmountChanged = (inputAmount) => {
    this.setState({ deposit: inputAmount });
  };

  onCalculateCheckClicked = () => {
    const { taxPercentage, businessPercentage, deposit } = this.state;
    let check = new Check(taxPercentage, businessPercentage);
    check.addDeposit(deposit);
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
      </Grid>
    );
  }
}

export default EstimateNetPay;

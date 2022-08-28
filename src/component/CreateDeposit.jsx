import { Component } from "react";
import { deepPurple } from "@mui/material/colors";
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import ToggleUserGroup from "./ToggleUserGroup";
import LabeledNumberInput from "./utility/LabeledNumberInput";
class CreateDeposit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobName: "",
      depositAmount: 0,
      payees: props.employees.map((employee) => employee.id),
    };
  }

  onJobNameChanged = (event) => {
    this.setState({ jobName: event.target.value });
  };

  onDepositAmountChanged = (amount) => {
    this.setState({ depositAmount: amount });
  };

  onUserToggled = (active, userId) => {
    const payees = this.state.payees;

    if (active) {
      this.setState({ payees: [...payees, userId] });
    } else {
      this.setState({
        employees: payees.splice(payees.indexOf(userId), 1),
      });
    }
  };

  onAddDepositClicked = () => {
    const { jobName, depositAmount, payees } = this.state;

    const deposit = {
      jobName: jobName.trim(),
      amount: depositAmount,
      payees: payees,
    };

    this.props.handleAddDeposit(deposit);
  };

  render() {
    const { employees } = this.props;

    return (
      <Grid container spacing={3} direction="column">
        <Grid item xs>
          <FormControl>
            <InputLabel htmlFor="deposit-name">Name</InputLabel>
            <OutlinedInput
              id="deposit-name"
              label="Name"
              size="small"
              onChange={this.onJobNameChanged}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <LabeledNumberInput
            id="deposit-amount"
            label="Deposit Amount"
            startAdornment="$"
            onChange={this.onDepositAmountChanged}
          />
        </Grid>
        <Grid container direction="row" item justifyContent="space-evenly" xs>
          <ToggleUserGroup
            users={employees}
            activeColor={deepPurple[500]}
            inactiveColor={"gray"}
            userToggledHandler={this.onUserToggled}
          />
        </Grid>
        <Grid item xs>
          <Button variant="outlined" onClick={this.onAddDepositClicked}>
            Add Deposit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default CreateDeposit;

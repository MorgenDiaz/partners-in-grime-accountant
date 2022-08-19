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
      employees: [
        { id: 96, firstName: "Art", lastName: "Diaz" },
        { id: 69, firstName: "Morgen", lastName: "Diaz" },
        { id: 23, firstName: "Penny", lastName: "Jo" },
      ],
    };
  }

  onUserToggled = (active, userId) => {
    alert(active, userId);
  };

  render() {
    return (
      <Grid container spacing={3} direction="column">
        <Grid item xs>
          <FormControl>
            <InputLabel htmlFor="deposit-name">Name</InputLabel>
            <OutlinedInput id="deposit-name" label="Name" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <LabeledNumberInput
            id="deposit-amount"
            label="Deposit Amount"
            startAdornment="$"
          />
        </Grid>
        <Grid container direction="row" item justifyContent="space-evenly" xs>
          <ToggleUserGroup
            users={this.state.employees}
            activeColor={deepPurple[500]}
            inactiveColor={"gray"}
            userToggledHandler={this.onUserToggled}
          />
        </Grid>
        <Grid item xs>
          <Button variant="outlined">Add Deposit</Button>
        </Grid>
      </Grid>
    );
  }
}

export default CreateDeposit;

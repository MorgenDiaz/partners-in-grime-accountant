import { Component } from "react";
import { deepPurple } from "@mui/material/colors";
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  Avatar,
  Button,
  ButtonBase,
} from "@mui/material";
import ToggleUser from "./ToggleUser";
import LabeledNumberInput from "./utility/LabeledNumberInput";
class CreateDeposit extends Component {
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
          <ToggleUser
            userId="69"
            firstName="Art"
            lastName="Diaz"
            activeColor={deepPurple[500]}
            inactiveColor={"gray"}
            userToggledHandler={this.onUserToggled}
          />

          <Avatar
            component={ButtonBase}
            data-user={"69"}
            onClick={(event) => {
              alert(event.target.getAttribute("data-user"));
              event.target.setAttribute("sx", { bgcolor: "#FFFFFF" });
            }}
            sx={{ bgcolor: deepPurple[500] }}
          >
            AD
          </Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>MD</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>PJ</Avatar>
        </Grid>
        <Grid item xs>
          <Button variant="outlined">Add Deposit</Button>
        </Grid>
      </Grid>
    );
  }
}

export default CreateDeposit;

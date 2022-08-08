import "./App.css";
import { Component } from "react";
import { InputLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { Grid, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import BasicDatePicker from "./component/date-picker";

class App extends Component {
  onDepositAmountChanged = (event) => {
    let input = event.target.value;
    if (Number.isNaN(Number(input))) {
      event.target.value = input.substring(0, input.length - 1);
    }
    console.log();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <BasicDatePicker></BasicDatePicker>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
          >
            <FormControl>
              <InputLabel htmlFor="tax-percentage">Tax</InputLabel>
              <OutlinedInput
                id="tax-percentage"
                label="Tax"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
                onChange={this.onDepositAmountChanged}
                size="small"
                sx={{ mr: 2 }}
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="business-percentage">Business</InputLabel>
              <OutlinedInput
                id="business-percentage"
                label="Business"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
                onChange={this.onDepositAmountChanged}
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
          >
            <FormControl>
              <InputLabel htmlFor="deposit-input">Deposit Amount</InputLabel>

              <OutlinedInput
                id="deposit-input"
                label="Deposit Amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                onChange={this.onDepositAmountChanged}
                sx={{ mr: 2 }}
              />
            </FormControl>
            <Button variant="outlined">ADD</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

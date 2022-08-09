import { InputLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { Grid, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import BasicDatePicker from "./date-picker.component";
import CheckStub from "./check-stub.component";

export default function CheckCreation({
  onTaxPercentChanged,
  onBusinessPercentChanged,
  onDepositAmountChanged,
  onCalculateCheckClicked,
  deposit,
  tax,
  business,
  taxDeducted,
  businessDeducted,
  payable,
}) {
  return (
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
              onChange={onTaxPercentChanged}
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
              onChange={onBusinessPercentChanged}
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
              onChange={onDepositAmountChanged}
            />
          </FormControl>
        </Grid>

        <Grid item>
          <Button variant="outlined" onClick={onCalculateCheckClicked}>
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
          deposit={deposit}
          tax={tax}
          business={business}
          taxDeducted={taxDeducted}
          businessDeducted={businessDeducted}
          payable={payable}
        />
      </Grid>
    </Grid>
  );
}

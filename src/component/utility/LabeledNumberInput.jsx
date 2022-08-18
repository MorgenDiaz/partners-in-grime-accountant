import { Component } from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
} from "@mui/material";
class LabeledNumberInput extends Component {
  /* 
    @todo should be able to clear input, but filter functions won't allow.
*/
  removeLastChar(inStr) {
    return inStr.substring(0, inStr.length - 1);
  }

  isWholeNumber(inStr) {
    return Number.isInteger(Number(inStr));
  }

  filterWholeNumber = (event) => {
    let input = event.target.value;

    if (!this.isWholeNumber(input)) {
      event.target.value = this.removeLastChar(input);
      return;
    }

    return input;
  };

  filterNumber = (event) => {
    let input = event.target.value;

    if (Number.isNaN(Number(input))) {
      event.target.value = this.removeLastChar(input);
      return;
    }

    return input;
  };

  render() {
    const { id, label, startAdornment, onChange, wholeNumbersOnly, value } =
      this.props;

    return (
      <FormControl>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <OutlinedInput
          id={id}
          label={label}
          placeholder="0"
          startAdornment={
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          }
          onChange={(event) => {
            const value = wholeNumbersOnly
              ? this.filterWholeNumber(event)
              : this.filterNumber(event);

            if (value !== undefined) {
              onChange(Number(value));
            }
          }}
          value={value}
          size="small"
        />
      </FormControl>
    );
  }
}

export default LabeledNumberInput;

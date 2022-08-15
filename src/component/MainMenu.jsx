import { Component } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

class MainMenu extends Component {
  onEstimateNetClicked = (routeChangeHandler) => {
    routeChangeHandler("estimate_net");
  };

  render() {
    const { routeChangeHandler } = this.props;
    return (
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          <Button key="empoloyees">Empoloyees</Button>
          <Button key="past-payouts">Past Payouts</Button>
          <Button key="new-payout">New Payout</Button>
          <Button
            key="estimate-net"
            onClick={() => {
              this.onEstimateNetClicked(routeChangeHandler);
            }}
          >
            Estimate Net
          </Button>
        </ButtonGroup>
      </Box>
    );
  }
}

export default MainMenu;

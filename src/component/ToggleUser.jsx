import { Component } from "react";
import { Avatar, ButtonBase } from "@mui/material";

class ToggleUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
    };
  }

  render() {
    const {
      userId,
      firstName,
      lastName,
      activeColor,
      inactiveColor,
      userToggledHandler,
    } = this.props;

    return (
      <Avatar
        component={ButtonBase}
        onClick={async () => {
          this.setState({ active: !this.state.active }, () => {
            userToggledHandler(this.state.active, userId);
          });
        }}
        sx={{ bgcolor: this.state.active ? activeColor : inactiveColor }}
      >
        {" "}
        {firstName[0] + lastName[0]}
      </Avatar>
    );
  }
}

export default ToggleUser;

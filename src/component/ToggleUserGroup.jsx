import { Box } from "@mui/material";
import { Component } from "react";
import ToggleUser from "./ToggleUser";

class ToggleUserGroup extends Component {
  render() {
    const { users, activeColor, inactiveColor, userToggledHandler } =
      this.props;

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {users.map((user) => {
          return (
            <ToggleUser
              key={user.id}
              userId={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              userToggledHandler={userToggledHandler}
            />
          );
        })}
      </Box>
    );
  }
}

export default ToggleUserGroup;

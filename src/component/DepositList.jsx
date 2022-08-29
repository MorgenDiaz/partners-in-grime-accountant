import { Component, Fragment } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  ListItemButton,
} from "@mui/material";
import { DeleteTwoTone } from "@mui/icons-material";

class DepositList extends Component {
  render() {
    const { deposits, employees } = this.props;

    return (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {deposits.map((deposit, index) => {
          return (
            <Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <DeleteTwoTone
                    onClick={() => {
                      console.log("yup");
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={deposit.jobName}
                  secondary={
                    <Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {`$${deposit.amount}: `}
                      </Typography>
                      {employees
                        .filter((employee) =>
                          deposit.payees.includes(employee.id)
                        )
                        .map((employee) => employee.firstName)
                        .join(", ")}
                    </Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          );
        })}
      </List>
    );
  }
}

export default DepositList;

import { Component, Fragment } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { DeleteTwoTone } from "@mui/icons-material";

class DepositList extends Component {
  getDepositPayeeNames = (deposit, employees) => {
    return employees
      .filter((employee) => deposit.payees.includes(employee.id))
      .map((employee) => employee.firstName)
      .join(", ");
  };

  createListItem = (deposit, index, employees, onDeleteClicked) => {
    return (
      <Fragment key={index}>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <DeleteTwoTone
              onClick={() => {
                onDeleteClicked(index);
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
                {this.getDepositPayeeNames(deposit, employees)}
              </Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </Fragment>
    );
  };

  render() {
    const { deposits, employees, onDeleteClicked } = this.props;

    return (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {deposits.map((deposit, index) => {
          return this.createListItem(
            deposit,
            index,
            employees,
            onDeleteClicked
          );
        })}
      </List>
    );
  }
}

export default DepositList;

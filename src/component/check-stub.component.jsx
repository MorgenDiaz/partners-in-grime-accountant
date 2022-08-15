import { Box, Paper } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function CheckStub({
  deposit,
  tax,
  business,
  taxDeducted,
  businessDeducted,
  payable,
}) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        "& > :not(style)": {
          m: 1,
          width: 248,
          height: 248,
        },
      }}
      elevation={3}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <h3>{`Deposit: $${deposit}`}</h3>
        <h3>{`Tax: ${tax}%`}</h3>
        <h3>{`Business: ${business}%`}</h3>
      </Box>

      <Box>
        <h3>{`Tax Deducted: $${taxDeducted}`}</h3>
        <h3>{`Business Deducted: $${businessDeducted}`}</h3>
        <h3>{`Payable: $${payable}`}</h3>
      </Box>
    </Paper>
  );
}

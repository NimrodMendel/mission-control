import { createTheme } from "@mui/material";
import { grey, teal } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: grey[400],
    },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto"].join(","),
  },
});

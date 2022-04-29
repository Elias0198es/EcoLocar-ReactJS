import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1E7D28",
    },
    secondary: {
      main: "#EDD929",
    },
  },
  typography: {
    fontFamily: ["Farro", "sans-serif"].join(","),
  },
});

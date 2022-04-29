import react from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>HURI</h1>
      <p>projeto provihack do agora</p>
    </div>
  );
};

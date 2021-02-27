import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  // },
  container: {
    flexGrow: 1,
    background: "rgba(0,0,0,0.5)",
    textAlign: "center",
    alignItems: "flex-start",
    padding: "1rem",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <Container maxWidth="sm">
        <Typography>Copyright &copy; Proshop</Typography>
      </Container>
    </footer>
  );
};

export default Footer;

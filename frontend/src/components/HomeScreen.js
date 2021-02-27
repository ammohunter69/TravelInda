// This is a welcome page
// this page show a message to "Welcome to travel India"
// and a button to that routes to states page.

import React, { useEffect, useState } from "react";
import { makeStyles, Collapse, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  changeColor: {
    display: "flex",
    position: "relative",
    height: "100%",
    width: "100%",
    //For Tri color transition
    backgroundImage:
      "linear-gradient(-45deg, #FF9933 , #FFFFF1 , #138808 , #FF9933 , #FFFFF1 , #138808, #FF9933 , #FFFFF1 , #138808)",
    backgroundSize: "200%",
    //below 2 line will mask the background trasition on the letter
    WebkitBackgroundClip: "text !important",
    backgroundClip: "text !important",
    color: "transparent",
    //transition with ease in and out with 3 sec delay loop infinitly
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut} infinite`,
  },
  //Tri color transition effect
  "@keyframes myEffect": {
    from: {
      backgroundPositionX: "0px",
    },
    to: {
      backgroundPositionX: "-360px",
    },
  },
  enter: {
    color: "#ffff",
    fontFamily: "Nunito",
  },
  button: {
    color: "#5AFF3D",
    borderRadius: "50px",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "1.5rem",
    margin: "1rem",
  },
}));

const Header = () => {
  //////////////////////////////////
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    //this is to make the in transition of Welcome to Travel India when set to true.
    setChecked(true);
  }, []);
  //////////////////////////////////

  return (
    <div className={classes.root} id="header">
      {/* this will make the Welcome to Travel India transition in when 'IN' is set to true with 1sec of transition duration. */}
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title} color="primary">
            Welcome to <br />
            <div className={classes.changeColor}>Travel India.</div>
          </h1>
          {/* upon clicking this link it will route to states page */}
          <Link
            to={`/states`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              <h3 className={classes.enter}>Enter</h3>
              <InfoIcon className={classes.goDown} fontSize="small" />
            </Button>
          </Link>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;

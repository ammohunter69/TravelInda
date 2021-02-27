import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
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
    backgroundImage:
      "linear-gradient(-45deg, #FF9933 , #FFFFF1 , #138808 , #FF9933 , #FFFFF1 , #138808, #FF9933 , #FFFFF1 , #138808)",
    backgroundSize: "200%",
    WebkitBackgroundClip: "text !important",
    backgroundClip: "text !important",
    color: "transparent",
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut} infinite`,
  },
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
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={10}>
        {/* <Toolbar className={classes.appbarWrapper}> */}
        <h1 className={classes.appbarTitle}>
          <Link
            to={`/`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span className={classes.colorText}>Travel India</span>
          </Link>
        </h1>
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}

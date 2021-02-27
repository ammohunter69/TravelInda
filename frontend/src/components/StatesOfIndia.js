// this page shows details about different states of india
// and upon clicking on any specific state it will route to specific state's details

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listStates } from "../redux/stateActions";
import ImageCard from "./ImageCard";
import { makeStyles, CircularProgress } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
// import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
const StatesOfIndia = () => {
  const dispatch = useDispatch();
  const stateList = useSelector((state) => state.stateList);
  const { loading, error, states } = stateList;
  const [timer, setTimer] = useState(false);
  //this timer is used to transition in all the states cards with half a sec delay
  setTimeout(() => {
    setTimer(true);
  }, 500);

  const classes = useStyles();

  useEffect(() => {
    dispatch(listStates());
    // }, [dispatch]);
  }, []);
  // }, [states]);

  return (
    <div className={classes.root} id="state-of-india">
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <MuiAlert severity="error">{error}!</MuiAlert>
      ) : (
        <div className={classes.root} id="state-of-india">
          {states.map((place) => (
            // <ImageCard place={place} checked={timer} />
            <ImageCard
              key={place._id}
              place={place}
              checked={timer}
              goto={"Places"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StatesOfIndia;

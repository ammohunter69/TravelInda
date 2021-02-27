// this component is used to display all details about a certain place

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listStateDetails } from "../redux/stateActions";
import { makeStyles, CircularProgress, Button } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import FinalImageCard from "./FinalImageCard";

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
  flowcontrol: {
    // backgroundColor: "white",
    // fontcolor: "black",
    margin: theme.spacing(1),
    marginTop: "5rem",
  },
}));

const PlaceDetails = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //for card in transistion

  const [timer, setTimer] = useState(false);
  setTimeout(() => {
    setTimer(true);
  }, 500);

  let stateDetials = useSelector((state) => state.stateDetials);

  useEffect(() => {
    if (!loading) {
      dispatch(listStateDetails(match.params.id));
      // console.log(`this is parameter variable ${match.params.place_id}`);
    }
    // }, [stateDetials]);
  }, [dispatch]);

  const place_id = match.params.place_id;
  const { loading, error, states } = stateDetials;
  const stateId = match.params.id;

  return (
    <>
      <div>
        <Link
          to={`/states/${stateId}/places`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.flowcontrol}
          >
            Go back
          </Button>
        </Link>
      </div>
      <div className={classes.root}>
        <div>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <MuiAlert severity="error">{error}!</MuiAlert>
          ) : (
            <div className={classes.root} id="placesDetails">
              {states.places
                .filter((place) => place._id === place_id)
                .map((place) => (
                  <FinalImageCard
                    key={place._id}
                    place={place}
                    checked={true}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PlaceDetails;

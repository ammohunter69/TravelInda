// this component show details about all the places in a perticular state

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listStateDetails } from "../redux/stateActions";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  makeStyles,
  CircularProgress,
  Button,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
// import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";
import categoryData from "../category/categoryData";
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
  control: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1px",
    color: "transparent",
  },
  formControl: {
    minWidth: 120,
    // fontcolor: "white",
    background: "#83c5be",
    borderRadius: "3px",
    marginTop: "5rem",
  },
  buttonControl: {
    marginTop: "5rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dropdown: {
    // padding: "3rem",
  },
}));

const Places = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(false);

  //state variable for category
  const [category, setCategory] = React.useState("");

  //updating category with input value
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  //for in transition
  setTimeout(() => {
    setTimer(true);
  }, 500);
  let stateDetials;

  useEffect(() => {
    //dispatching action to get all place details in a particular state
    dispatch(listStateDetails(match.params.id));
  }, [stateDetials]);
  // }, [dispatch]);

  //getting all place details from the store
  stateDetials = useSelector((state) => state.stateDetials);
  let { loading, error, states } = stateDetials;
  let filteredPlaces;

  if (!loading) {
    let places = states.places;
    filteredPlaces = places.filter((place) => {
      if (category == "") {
        return true;
      } else if (category !== "" && category == place.category) {
        return true;
      }
    });
  }

  return (
    <>
      <div className={classes.control}>
        <Link
          to={`/states`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.buttonControl}
          >
            Go back
          </Button>
        </Link>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          <Select value={category} onChange={handleChange} label="category">
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {categoryData.map((data, i) => {
              return (
                <MenuItem key={i} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>

      {/* <CardTest /> */}
      <div className={classes.root}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <MuiAlert severity="error">{error}!</MuiAlert>
        ) : (
          <div className={classes.root} id="places">
            {filteredPlaces.length === 0 ? (
              <Typography gutterBottom variant="h5" style={{ color: "white" }}>
                No data found. Please try another category.
              </Typography>
            ) : (
              // states.places.map((place) => (
              filteredPlaces.map((place) => (
                <ImageCard
                  key={place._id}
                  place={place}
                  checked={true}
                  goto={"PlacesDetails"}
                  stateId={states._id}
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Places;

// return (
//   <>
//     <div>
//       <FormControl variant="filled" className={classes.formControl}>
//         <InputLabel id="demo-simple-select-outlined-label">
//           category
//         </InputLabel>
//         <Select value={category} onChange={handleChange} label="category">
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={"Sea"}>Sea</MenuItem>
//           <MenuItem value={"Temple"}>Temple</MenuItem>
//           <MenuItem value={"Forrest"}>Forrest</MenuItem>
//           <MenuItem value={"Hill"}>Hill</MenuItem>
//           <MenuItem value={"Valley"}>Valley</MenuItem>
//           <MenuItem value={"Mountain"}>Mountain</MenuItem>
//           <MenuItem value={"Historical"}>Historical</MenuItem>
//         </Select>
//       </FormControl>
//     </div>

//     {/* <CardTest /> */}
//     <div className={classes.root}>
//       {loading ? (
//         <CircularProgress />
//       ) : error ? (
//         <MuiAlert severity="error">{error}!</MuiAlert>
//       ) : (
//         <div className={classes.root} id="places">
//           {
//             // states.places.map((place) => (
//             filteredPlaces.map((place) => (
//               <ImageCard
//                 key={place._id}
//                 place={place}
//                 checked={true}
//                 goto={"PlacesDetails"}
//                 stateId={states._id}
//               />
//             ))
//           }
//         </div>
//       )}
//     </div>
//   </>
// );

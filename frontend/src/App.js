import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, makeStyles } from "@material-ui/core";
import HomeScreen from "./components/HomeScreen";
import Places from "./components/Places";
import PlacesDetail from "./components/PlacesDetails";
import StatesOfIndia from "./components/StatesOfIndia";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${"/assets/bg13.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/states" component={StatesOfIndia} exact />
        <Route path="/states/:id/places" component={Places} exact />
        <Route
          path="/states/:id/places/:place_id"
          component={PlacesDetail}
          exact
        />
      </div>
    </Router>
  );
};

export default App;

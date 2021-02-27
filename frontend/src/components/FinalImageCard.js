import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // marginTop: "7rem",
    maxWidth: "98%",
    maxHeight: "98%",
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});

export default function ImageCard({ place, checked, goto, stateId }) {
  const classes = useStyles();
  const { image, name, description, category, entryfee, timing, _id } = place;

  return (
    <>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" className={classes.title}>
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              Category : {category}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              Entry Fee {entryfee}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              Timing : {timing}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
    </>
  );
}

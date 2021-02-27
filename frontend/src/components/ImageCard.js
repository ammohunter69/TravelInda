// this is a reusable component that is used to display information card on screen
// it takes in image, name and description as parameters and displayes it as cards

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
    marginTop: "2rem",
    maxWidth: 645,
    minHeight: 600,
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
  let urlLink = "#";
  const { image, name, description, _id } = place;

  //deciding the route based on input
  // Places for states
  //PlacesDetails for state detials
  //# is default value

  if (goto === "Places") {
    urlLink = `/states/${_id}/places`;
  } else if (goto === "PlacesDetails") {
    urlLink = `/states/${stateId}/places/${_id}`;
  } else {
    urlLink = `#`;
  }

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Link
        to={urlLink}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <Card className={classes.root}>
          <CardMedia className={classes.media} image={image} title={name} />
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
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Collapse>
  );
}

//

//

//

// export default function ImageCard({ place, checked, goto }) {
//   const classes = useStyles();
//   const { image, name, description, _id } = place;
//   console.log(place);
//   // console.log(`${(${goto})}`);
//   // console.log(image, name, description);
//   return (
//     <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
//       <Link
//         to={`/states/${_id}/places`}
//         // to={`${ goto === 'Places'` ? `/states/${_id}/places` : `/states/${_id}/places/${place_id}}`}
//         style={{ color: "inherit", textDecoration: "inherit" }}
//       >
//         {/* <CardDetails /> */}
//         <Card className={classes.root}>
//           <CardMedia
//             className={classes.media}
//             image={image}
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography
//               gutterBottom
//               variant="h5"
//               // component="h1"
//               className={classes.title}
//             >
//               {name}
//             </Typography>
//             <Typography
//               variant="body2"
//               color="textSecondary"
//               component="p"
//               className={classes.desc}
//             >
//               {description}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Link>
//     </Collapse>
//   );
// }

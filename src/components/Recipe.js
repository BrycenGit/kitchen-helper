import React from "react";

import { firestore } from "../lib/firebase";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Recipe = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { title, description, method, id } = props;
  const selectedRecipe = firestore.collection("recipes").doc(id);
  const deleteRecipe = () => {
    selectedRecipe
      .delete()
      .then(() => {
        console.log("Recipe Deleted");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Recipe
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {description}
          </Typography>
          <Typography variant="body2" component="p">
            {method}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={deleteRecipe} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Recipe;

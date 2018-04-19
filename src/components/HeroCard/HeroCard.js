import React from "react";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

const styles = {
  card: {
    maxWidth: "30%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

const HeroCard = props => {
  const { name, thumbnail, description } = props.hero;

  return (
    <Card style={styles.card}>
      <CardMedia
        style={styles.media}
        image={`${thumbnail.path}/landscape_incredible.${thumbnail.extension}`}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default HeroCard;

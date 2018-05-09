import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

const StyledCard = styled(Card)`
  max-height: 375px;

  .card-media {
    height: 0;
    padding-top: 56.26%; /* 16:9 */
  }

  .card-link {
    border-radius: 2px;
    color: ${props => props.theme.primary};
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1.4em;
    min-height: 32px;
    min-width: 64px;
    padding: 7px 8px;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
      background-color: rgba(244, 67, 54, 0.08);
    }
  }
`;

const HeroCard = props => {
  const { name, thumbnail, id } = props.hero;

  return (
    <StyledCard>
      <CardMedia
        className="card-media"
        image={`${thumbnail.path}/landscape_incredible.${thumbnail.extension}`}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className="card-link" to={`/hero/${id}`}>
          Learn More
        </Link>
      </CardActions>
    </StyledCard>
  );
};

export default HeroCard;

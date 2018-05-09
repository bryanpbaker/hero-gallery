import React, { Component } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import Button from "material-ui/Button";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import Copyright from "../Copyright";

// import components
import Loader from "../Loader";

const HeroDetailWrapper = styled.div`
  background-color: ${props => props.theme.primary};
  min-height: 100vh;
  padding: 20px;

  h1 {
    color: white;
    font-family: ${props => props.theme.boldFont};
    font-size: 4em;
    letter-spacing: 3px;
    margin-bottom: 20px;
    text-shadow: 1px 1px 3px #222;
  }

  img {
    object-fit: cover;
    max-width: 100%;
  }

  p {
    background: white;
    border: 8px solid #444;
    border-radius: 8px;
    color: #444;
    font-size: 1.3em;
    line-height: 28px;
    max-width: 992px;
    padding: 20px;
  }

  h3 {
    color: white;
    margin-top: 60px;
  }

  .link-list {
    background-color: ${props => props.theme.secondary};
    max-width: 400px;

    a {
      color: white;
    }
  }

  @media (min-width: 992px) {
    padding: 40px 3%;
  }
`;

const HeroDetail = inject("HeroStore")(
  observer(
    class HeroDetail extends Component {
      componentDidMount() {
        this.props.HeroStore.fetchHeroDetails(this.props.match.params.id);
      }

      componentDidUpdate() {
        console.log(this.props.HeroStore.heroDetails);
      }

      render() {
        const { isLoading } = this.props.HeroStore;
        const { heroDetails } = this.props.HeroStore;

        if (isLoading) {
          return (
            <HeroDetailWrapper>
              <Loader />
            </HeroDetailWrapper>
          );
        }

        return (
          <React.Fragment>
            <HeroDetailWrapper>
              <h1>{heroDetails.name}</h1>
              <div style={{ marginBottom: "25px" }}>
                <Button variant="raised" component={Link} to={"/"}>
                  Back
                </Button>
              </div>
              {heroDetails.thumbnail && (
                <img
                  src={`${heroDetails.thumbnail.path}/landscape_incredible.${
                    heroDetails.thumbnail.extension
                  }`}
                  alt={heroDetails.name}
                />
              )}
              <p>
                {heroDetails.description ||
                  "Sorry, no description is available for this hero!"}
              </p>
              <h3>Useful Links</h3>
              <List className="link-list">
                {heroDetails.urls &&
                  heroDetails.urls.map(link => (
                    <ListItem
                      key={link.url}
                      button
                      component="a"
                      href={link.url}
                      target="_blank"
                    >
                      {link.type}
                    </ListItem>
                  ))}
              </List>
            </HeroDetailWrapper>
            <Copyright />
          </React.Fragment>
        );
      }
    }
  )
);

export default HeroDetail;

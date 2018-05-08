import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

// import components
import Loader from "../Loader";

const HeroDetailWrapper = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 20px;

  h1 {
    color: white;
    font-family: ${props => props.theme.boldFont};
    font-size: 4em;
    letter-spacing: 3px;
    text-shadow: 1px 1px 3px #222;
  }

  p {
    background: white;
    border: 8px solid #444;
    border-radius: 8px;
    color: #444;
    font-size: 1.3em;
    line-height: 28px;
    max-width: 90%;
    padding: 20px;
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
          <HeroDetailWrapper>
            <h1>{heroDetails.name}</h1>
            <img
              src={`${heroDetails.thumbnail.path}/landscape_incredible.${
                heroDetails.thumbnail.extension
              }`}
              alt={heroDetails.name}
            />
            <p>
              {heroDetails.description ||
                "Sorry, no description is available for this hero!"}
            </p>
          </HeroDetailWrapper>
        );
      }
    }
  )
);

export default HeroDetail;

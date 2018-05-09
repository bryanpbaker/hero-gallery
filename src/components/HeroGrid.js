import React from "react";
import HeroCard from "./HeroCard";
import styled from "styled-components";
import { observer, inject } from "mobx-react";

import Loader from "./Loader";

// styled components
const HeroGridElement = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 25px 15px;
  margin-top: 50px;
  min-height: 70vh;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

/**
 * render a HeroCard for each hero on props.heroes
 * @param {Object} props
 */
const renderHeroes = props => {
  if (props.HeroStore.heroes.length > 0) {
    return props.HeroStore.heroes.map(hero => (
      <HeroCard key={hero.id} hero={hero} />
    ));
  }

  return <h3>Sorry, no heroes found! Please try again.</h3>;
};

const HeroGrid = inject("HeroStore")(
  observer(props => {
    if (props.HeroStore.isLoading) {
      return <Loader />;
    }

    return <HeroGridElement>{renderHeroes(props)}</HeroGridElement>;
  })
);

export default HeroGrid;

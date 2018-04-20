import React from "react";
import styled from "styled-components";

// Import Components
import Header from "../Header";
import SearchBar from "../SearchBar";
import HeroGrid from "../HeroGrid";

// Styled Component
const HeroGridWrapper = styled.div`
  background-color: ${props => props.theme.secondary};
  padding: 20px;

  @media (min-width: 992px) {
    padding: 3% 10% 10% 10%;
  }
`;

const HeroSearch = props => (
  <React.Fragment>
    <Header />
    <HeroGridWrapper>
      <SearchBar />
      <HeroGrid />
    </HeroGridWrapper>
  </React.Fragment>
);

export default HeroSearch;

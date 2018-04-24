import React from "react";
import styled from "styled-components";

import Nav from "./Nav";

const StyledHeader = styled.div`
  background-color: ${props => props.theme.primary};
  background-image: url("https://www.transparenttextures.com/patterns/binding-dark.png");
  padding: 15px;

  @media (min-width: 1200px) {
    padding: 20px 50px 150px 50px;
  }

  h1 {
    color: white;
    font-family: ${props => props.theme.boldFont};
    font-size: 3em;
    letter-spacing: 3px;
    margin-top: 60px;
    text-transform: uppercase;
    transform: rotate(-4deg);

    @media (min-width: 768px) {
      font-size: 10em;
    }

    small {
      display: block;
    }
  }

  p {
    background: #222;
    color: white;
    font-size: 1em;
    line-height: 28px;
    margin: 0 auto;
    max-width: 992px;
    padding: 5px 10px;

    @media (min-width: 768px) {
      font-size: 1.65em;
      line-height: 40px;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <Nav />
    <h1>Hero Gallery</h1>
    <p>
      Welcome to the Hero Gallery. Here, you can search for your favorite
      Marvel&copy; characters, ready their backstories and see images from their
      most exciting comics.
    </p>
    <p>
      Just scroll down to the search area, type in the name of your favorite
      hero and enjoy the results!
    </p>
  </StyledHeader>
);

export default Header;

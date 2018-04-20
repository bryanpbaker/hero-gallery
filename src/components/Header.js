import React from "react";
import styled from "styled-components";

import Nav from "./Nav";

const StyledHeader = styled.div`
  background-color: ${props => props.theme.primary};
  background-image: url("https://www.transparenttextures.com/patterns/binding-dark.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */

  @media (min-width: 1200px) {
    padding: 20px 50px 200px 50px;
  }

  h1 {
    color: white;
    font-family: ${props => props.theme.boldFont};
    font-size: 3em;
    letter-spacing: 3px;
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
    font-size: 1.65em;
    line-height: 40px;
    margin: 0 auto;
    max-width: 992px;
    padding: 5px 10px;
  }
`;

const Header = () => (
  <StyledHeader>
    <Nav />
    <h1>Hero Gallery</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, labore
      fugit est eum provident non aspernatur laboriosam animi, perferendis nobis
      cupiditate nulla. Quisquam eveniet porro cumque enim dolorem eos aperiam
      quas dolorum tempora quo sapiente, labore temporibus ea natus consequuntur
      ratione sint libero deleniti doloremque. Sit perferendis eveniet optio
      facilis.
    </p>
  </StyledHeader>
);

export default Header;

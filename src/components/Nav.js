import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: flex-end;

    li {
      list-style: none;
      margin-left: 25px;
    }
  }

  a {
    color: white;
    font-size: 1.25em;
    text-decoration: none;

    &.active {
      border-bottom: 3px solid ${props => props.theme.secondaryDark};
    }
  }
`;

const links = [
  {
    id: 1,
    path: "/",
    text: "Hero Search"
  },
  {
    id: 2,
    path: "/comics",
    text: "Comic Search"
  },
  {
    id: 3,
    path: "/about",
    text: "About"
  }
];

const renderLinks = () => {
  return links.map(link => (
    <li key={link.id}>
      <NavLink to={link.path} activeClassName="active">
        {link.text}
      </NavLink>
    </li>
  ));
};

const Nav = () => (
  <StyledNav>
    <ul>{renderLinks()}</ul>
  </StyledNav>
);

export default Nav;

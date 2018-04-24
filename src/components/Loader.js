import React from "react";
import { CircularProgress } from "material-ui";
import styled from "styled-components";

const StyledLoader = styled.div`
  position: relative;

  .circular-progress {
    color: white;
    margin: 30px auto;
    display: block;
  }
`;

const Loader = () => (
  <StyledLoader className="loader-container">
    <CircularProgress className="circular-progress" size={80} />
  </StyledLoader>
);

export default Loader;

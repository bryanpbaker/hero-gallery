import React from "react";
import styled from "styled-components";

const StyledCopyright = styled.div`
  background-color: ${props => props.theme.secondary};
  padding: 10px 15px;
`;

const Copyright = () => (
  <StyledCopyright>Data provided by Marvel. © 2014 Marvel</StyledCopyright>
);

export default Copyright;

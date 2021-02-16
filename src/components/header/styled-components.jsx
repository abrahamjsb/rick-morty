import styled from "styled-components";
import { theme } from "../../utils/constants";

export const HeaderStyled = styled.header`
  min-height: 300px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 3em;
  margin: 0;
  line-height: 0.9;
`;

export const SecondaryTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  color: ${theme.orangeText};
  margin: 0;
  background-color: ${theme.darkBackground};
  padding: 0 ${theme.spacing};
  -webkit-transform: skewX(-15deg);
  -moz-transform: skewX(-15deg);
  -ms-transform: skewX(-15deg);
  transform: skewX(-15deg);
  font-size: 1.05em;
`;

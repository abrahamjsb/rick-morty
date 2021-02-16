import styled from "styled-components";
import { SCREEN } from "../../utils/constants";

const screenHeight = window.innerHeight - 200;

export const MainBodyStyled = styled.section`
  background-color: ${(props) => props.theme.darkBackground};
  padding-top: ${(props) => props.theme.spacing};
  min-height: ${screenHeight}px;
`;

export const Container = styled.div`
  width: 960px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${SCREEN.SMALL}) {
    width: 780px;
  }
  @media (max-width: ${SCREEN.XS}) {
    width: 100%;
    padding: 0 16px;
    flex-direction: column;
  }
`;

export const ErrorMessage = styled.h1`
  color: #ffffff;
  font-size: 2em;
  text-align: center;
`;

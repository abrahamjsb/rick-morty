import styled from "styled-components";
import { theme } from "../../utils/constants";

export const CardStyled = styled.article`
  border-radius: 16px;
  margin: ${theme.spacing};
  background-color: ${theme.cardBackground};
  box-shadow: ${theme.cardShadow};
  width: 300px;
  height: 580px;
  cursor: pointer;
`;

export const CardPhotoContainer = styled.figure`
  position: relative;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 300px;
  overflow: hidden;

  & img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    object-fit: cover;
  }

  & figcaption {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: ${theme.spacing};
    color: ${theme.cardTitle};
    background-color: rgba(32, 35, 41, 0.85);

    & h3 {
      margin: 0;
      font-size: 1.5em;
      word-wrap: wrap;
      font-weight: 200;
    }
  }
`;

export const CardDescription = styled.ul`
  color: ${theme.lightColor};
  list-style: none;
  padding: ${theme.spacing};
  & li {
    color: inherit;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px rgba(158, 158, 158, 0.45);
    padding: ${theme.spacing} 0;

    .description-card-value {
      color: ${theme.orangeText};
      margin-left: ${theme.spacing};
      text-align: right;
    }

    &:last-child {
      border-bottom: none;
      display: flex;
      justify-content: space-between;
    }
  }
`;

import styled from "styled-components";

export const CardStyled = styled.article`
  border-radius: 16px;
  margin: ${(props) => props.theme.spacing};
  background-color: ${(props) => props.theme.cardBackground};
  box-shadow: ${(props) => props.theme.cardShadow};
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
    padding: ${(props) => props.theme.spacing};
    color: ${(props) => props.theme.cardTitle};
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
  color: ${(props) => props.theme.lightColor};
  list-style: none;
  padding: ${(props) => props.theme.spacing};
  & li {
    color: inherit;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px rgba(158, 158, 158, 0.45);
    padding: ${(props) => props.theme.spacing} 0;

    .description-card-value {
      color: ${(props) => props.theme.orangeText};
      margin-left: ${(props) => props.theme.spacing};
      text-align: right;
    }

    &:last-child {
      border-bottom: none;
      display: flex;
      justify-content: space-between;
    }
  }
`;

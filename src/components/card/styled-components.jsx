import styled from "styled-components";
import { theme } from "../../utils/constants";
export const CardStyled = styled.div`
  border-radius: 16px;
  margin: ${theme.spacing};
  background-color: ${theme.cardBackground};
  box-shadow: ${theme.cardShadow};
`;

export const CardPhotoContainer = styled.div`
  position: relative;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
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

    &.description-card-value {
      color: ${theme.orangeText};
    }
  }
`;

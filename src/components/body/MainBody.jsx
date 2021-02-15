import React from "react";
import { MainBodyStyled } from "./styled-components";

export default function MainBody({ children }) {
  return <MainBodyStyled>{children}</MainBodyStyled>;
}

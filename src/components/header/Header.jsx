import React from "react";
import { HeaderStyled } from "./styled-components";

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

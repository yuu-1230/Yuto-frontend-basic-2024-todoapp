import React from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/font_family";
import BREAKPOINT from "../../../variables/breakpoint";

export const Title = () => {
  return <StyledTitle>SIMPLE TODO APP</StyledTitle>;
};

const StyledTitle = styled.p`
  ${TEXT.L};
  margin: 0;
  font-family: ${FONTFAMILY.ROBOTO};
  color: ${COLOR.WHITE};
  font-weight: 500;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.M};
    font-family: ${FONTFAMILY.NOTO_SANS};
  }
`;

import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

export const Checkbox = ({ onClick }) => {
  return (
    <StyledCheckbox onClick={onClick}>
      <StyledImg src={check} />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  &:hover img {
    visibility: visible;
  }
`;
const StyledImg = styled.img`
  height: 20px;
  width: 20px;
  visibility: hidden;
`;

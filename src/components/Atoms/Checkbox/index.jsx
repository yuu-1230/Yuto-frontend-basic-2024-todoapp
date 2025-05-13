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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  box-sizing: border-box;
  &:hover img {
    visibility: visible;
  }
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  visibility: hidden;
`;

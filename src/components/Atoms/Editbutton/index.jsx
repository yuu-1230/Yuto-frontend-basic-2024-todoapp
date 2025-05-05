import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const Editbutton = ({ onClick }) => {
  return (
    <StyledEditButton onClick={onClick}>
      <StyledImg src={pencil} />
    </StyledEditButton>
  );
};
const StyledEditButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;
const StyledImg = styled.img`
  padding: 0px;
  width: 20px;
  height: 20px;
`;

import React from "react";
import COLOR from "../../../variables/color";
// 例）isActive の Props に応じて文字色を変化させたい場合
import styled from "styled-components";
import TEXT from "../../../variables/texts";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

export const Alert = () => {
  const { errorText, visible } = useAlertHandlerContext();
  return (
    <ErrorTextWrapper visible={visible}>
      <StyledAlert>{errorText}</StyledAlert>
    </ErrorTextWrapper>
  );
};

const ErrorTextWrapper = styled.div`
  width: 400px;
  position: absolute;
  transform: ${(props) =>
    props.visible ? "translate(-50%, 40%)" : "translate(-50%, 0%)"};
  top: 80px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: 0.5s ease-in-out;
  @media (max-width: 500px) {
    width: 83%;
  }
`;

const StyledAlert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* max-width: 400px; */
  width: 100%;
  height: 40px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.RED};
  border-radius: 4px;
  ${TEXT.S}
`;

import React from "react";
import COLOR from "../../../variables/color";
// 例）isActive の Props に応じて文字色を変化させたい場合
import styled from "styled-components";
import TEXT from "../../../variables/texts";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

export const Alert = () => {
  const { ErrorText, visible } = useAlertHandlerContext();
  return (
    <ErrorTextWrapper visible={visible}>
      <StyledAlert>
        <ErrorText />
      </StyledAlert>
    </ErrorTextWrapper>
  );
};

const ErrorTextWrapper = styled.div`
  margin-top: 80px;
  width: 400px;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  padding: 10px 20px;
`;
const StyledAlert = styled.p`
  box-sizing: border-box;
  padding: 10px 20px;
  max-width: 400px;
  width: 100%;
  height: 40px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.RED};
  border-radius: 4px;
  ${TEXT.S}
`;

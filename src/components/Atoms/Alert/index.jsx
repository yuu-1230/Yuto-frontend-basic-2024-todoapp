import React from "react";
import COLOR from "../../../variables/color";
// 例）isActive の Props に応じて文字色を変化させたい場合
import styled from "styled-components";

export const Alert = () => {
  return (
    <ErrorTextWrapper>
      <ErrorText />
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
const ErrorText = styled.p``;

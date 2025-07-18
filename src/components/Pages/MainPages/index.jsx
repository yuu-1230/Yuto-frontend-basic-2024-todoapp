import React from "react";
import { TodoCard } from "../../Organisms/TodoCard";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/font_family";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const MainPage = () => {
  return (
    <StyledWrapper>
      <StyledTitle>SIMPLE TODO APP</StyledTitle>
      <TodoCardWrapper>
        <TodoCard />
      </TodoCardWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitle = styled.div`
  font-family: ${FONTFAMILY.ROBOTO};
  color: ${COLOR.WHITE};
  ${TEXT.L};
  @media (max-width: 1000px) {
    ${TEXT.M};
  }
`;
const TodoCardWrapper = styled.div`
  margin: 20px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

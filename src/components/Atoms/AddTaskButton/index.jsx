import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import Plus from "../../../assets/svg/plus.svg";
export const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <StyledImg src={Plus} />
      <StyledText>タスクを追加</StyledText>
    </StyledAddTaskButton>
  );
};

const StyledAddTaskButton = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  padding: 2px 6px;
  gap: 10px;
  font-size: 14px;
  color: ${COLOR.GREEN};
  border-radius: 12px;
  &:hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
`;
const StyledImg = styled.img`
  height: 20px;
  width: 20px;
`;
const StyledText = styled.p`
  margin: 0px;
`;

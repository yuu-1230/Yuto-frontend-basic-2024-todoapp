import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "../../Atoms/Checkbox";
import { Editbutton } from "../../Atoms/Editbutton";
import { Input } from "../../Atoms/Input";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };
  const onEditButtonClick = () => {
    setIsEditing(true);
  };
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <Editbutton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  padding: 2px 6px;
  width: 100%;
`;

const StyledCheckboxWrapper = styled.div``;

const StyledNameAndButtonWrapper = styled.div``;

const StyledTaskName = styled.div``;

const StyledEditButtonWrapper = styled.div`
  padding-left: 8px;
`;

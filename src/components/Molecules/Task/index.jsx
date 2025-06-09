import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "../../Atoms/Checkbox";
import { Editbutton } from "../../Atoms/Editbutton";
import { Input } from "../../Atoms/Input";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "taskname",
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    console.log(`taskname changed: ${value}`);
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
  align-items: center;
  padding: 2px 6px;
  width: 100%;
`;

const StyledCheckboxWrapper = styled.div`
  align-items: center;
  margin-right: 10px;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledTaskName = styled.div`
  width: 100%;
  margin-right: 10px;
  font-family: ${FONTFAMILY.NOTO_SANS};
  font-size: ${TEXT.S};
  color: ${COLOR.LIGHT_GRAY};
`;
const StyledEditButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

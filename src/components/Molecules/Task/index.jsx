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
  const isEditing = useState(defaultIsEditing);
  const onEditComprete = 1;
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper></StyledCheckboxWrapper>
      {isEditing ? (
        Input(onEditComplete,taskName)
      ) : (
        <StyledNameAndButtonWrapper>
           <StyledTaskName>
            
            </StyledTaskName>
            <StyledEditButtonWrapper>
            Editbutton()
            <StyledEditButtonWrapper/>
        <StyledNameAndButtonWrapper/>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
    
`
const StyledCheckboxWrapper = styled.div`
    
`
const StyledNameAndButtonWrapper = styled.div`
    
`
const StyledTaskName = styled.div`
    
`
const StyledEditButtonWrapper = styled.div`
    
`
 

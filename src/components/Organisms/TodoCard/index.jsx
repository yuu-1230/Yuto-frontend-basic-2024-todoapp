import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const onAddTaskButtonClick = () => {};
  const onTaskComplete = () => {};
  const onTaskNameChange = () => {};
  return (
    <StyledWrapper>
      <AddTaskButton />
      <StyledTaskList>
        {taskList.map((task, index) => {
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />;
        })}
      </StyledTaskList>
    </StyledWrapper>
  );
};

StyledWrapper = styled.div``;
StyledTaskList = styled.div``;

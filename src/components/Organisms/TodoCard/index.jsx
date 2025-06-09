import React, { useState } from "react";
import styled from "styled-components";
import { AddTaskButton } from "../../Atoms/AddTaskButton";
import { Task } from "../../Molecules/Task";
export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const onAddTaskButtonClick = () => {
    // setTaskList([...taskList, { name: "", initializing: true }]);
    const newitem = { name: "", initializing: true };
    setTaskList((prev) => {
      return [...prev, newitem];
    });
  };
  const onTaskComplete = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };
  const onTaskNameChange = (value, index) => {
    setTaskList(
      taskList.map((task, i) => (i === index ? { ...task, name: value } : task))
    );
  };
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => {
          return (
            <Task
              key={index}
              onTaskComplete={() => onTaskComplete(index)}
              onTaskNameChange={(value) => onTaskNameChange(value, index)}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          );
        })}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;
const StyledTaskList = styled.div``;

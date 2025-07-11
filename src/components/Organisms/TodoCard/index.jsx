import React, { useState } from "react";
import styled from "styled-components";
import { AddTaskButton } from "../../Atoms/AddTaskButton";
import { Task } from "../../Molecules/Task";
import COLOR from "../../../variables/color";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
export const TodoCard = () => {
  const { setAlert } = useAlertHandlerContext();
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
    if (value === "") {
      setAlert("タスクが設定されていません");
      setTaskList((prev) => prev.filter((_, i) => i != index));
    } else {
      setTaskList((prev) =>
        prev.map((task, i) => (i === index ? { ...task, name: value } : task))
      );
    }
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

const StyledWrapper = styled.div`
  box-sizing: border-box;
  width: 500px;
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const StyledTaskList = styled.div`
  > * {
    margin-top: 10px;
  }
`;

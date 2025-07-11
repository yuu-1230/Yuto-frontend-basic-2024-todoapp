import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AddTaskButton } from "../../Atoms/AddTaskButton";
import { Task } from "../../Molecules/Task";
import COLOR from "../../../variables/color";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
export const TodoCard = () => {
  const Storage_key = "taskitem";
  const [taskList, setTaskList] = useState(() => {
    const data = localStorage.getItem(Storage_key);
    return data ? JSON.parse(data) : [];
  });
  const { setAlert } = useAlertHandlerContext();
  const onAddTaskButtonClick = () => {
    // setTaskList([...taskList, { name: "", initializing: true }]);
    const newitem = { name: "", initializing: true };
    setTaskList((prev) => {
      return [...prev, newitem];
    });
  };
  useEffect(() => {
    localStorage.setItem(Storage_key, JSON.stringify(taskList));
  }, [taskList]);
  const onTaskComplete = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };
  const onTaskNameChange = (value, index) => {
    if (value === "") {
      setTaskList((prev) => prev.filter((_, i) => i != index));
      setAlert("タスクの名前が設定されていません。");
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

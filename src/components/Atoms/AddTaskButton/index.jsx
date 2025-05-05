import React from "react";
//  import styled from "styled-components";
import Plus from "../../assets/svg/plus.svg";
export const AddTaskButton = () => {
  return (
    <div>
      <img src={Plus} />
      <p>タスクを追加</p>
    </div>
  );
};

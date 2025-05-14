import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

export const Input = ({ onEditComplete, defaultValue = "" }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleBlur = () => {
    onEditComplete(inputRef.current.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEditComplete(inputRef.current.value);
    }
  };
  return (
    <StyledInput
      ref={inputRef}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      defaultValue={defaultValue}
      type="text"
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 0px 4px;
  border: none;
  border-radius: 2px;
  outline: none;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};
  font-weight: 500;
  font-family: ${FONT_FAMILY.NOTO_SANS};
`;

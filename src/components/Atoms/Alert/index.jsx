import React from "react";
// 例）isActive の Props に応じて文字色を変化させたい場合
import styled from "styled-components";

const Component = () => {
  return <Example isActive={true}> hogehoge </Example>;
};

const Example = styled.div`
  color: ${(props) => (props.isActive ? "red" : "blue")};
`;

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 0.8rem 3rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  cursor: pointer;
  transition: all 0.2s ease 0s;

  background-color: ${props => props.backgroundColor || "#000"};
  color: ${props => props.textColor || "#fff"};
  font-size: ${props => props.fontSize || "0.875rem"};
  font-weight: ${props => props.fontWeight || "500"};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};

  ${props =>
    props.centered &&
    `
    margin: auto;
  `}

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`;

export default props => {
  const {
    children,
    backgroundColor,
    textColor,
    fontSize,
    fontWeight,
    borderRadius,
    centered,
    marginTop,
    marginBottom
  } = props;

  return (
    <Button
      backgrounsdColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      marginTop={marginTop}
      marginBottom={marginBottom}
      centered={centered}
      onClick={props.onClick}
    >
      {children}
    </Button>
  );
};

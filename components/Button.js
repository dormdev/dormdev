import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  position: relative;
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 0.5rem 2rem;
  cursor: pointer;

  background-color: ${props => props.backgroundColor || '#000'};
  color: ${props => props.textColor || '#fff'};
  font-size: ${props => props.fontSize || '0.875rem'};
  font-weight: ${props => props.fontWeight || '500'};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  width: ${props => props.width};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '4px'};

  ${props =>
    props.centered &&
    `
    margin: auto;
  `}

  &:hover {
    ${props =>
      props.hover ||
      'box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25)'};
  }
`

const Button = props => {
  const {
    children,
    text,
    backgroundColor,
    textColor,
    fontSize,
    fontWeight,
    border,
    borderRadius,
    marginTop,
    marginBottom,
    centered,
    width,
    hover,
    onClick
  } = props

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      border={border}
      borderRadius={borderRadius}
      marginTop={marginTop}
      marginBottom={marginBottom}
      centered={centered}
      width={width}
      hover={hover}
      onClick={onClick}
    >
      {text || children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  centered: PropTypes.bool,
  width: PropTypes.string,
  hover: PropTypes.string,
  onClick: PropTypes.func
}

export default Button

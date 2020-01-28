import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCard = styled.div`
  display: block;
  width: ${props => props.width || '100%'};
  height: ${props => props.height};
  padding: 2.5rem;
  position: relative;
  background: #fdfdfd;
  border-radius: 0.8rem;
  border: 2px solid var(--grey8);
  will-change: transform;
  color: rgb(55, 53, 47);
  cursor: pointer;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    border: 2px solid var(--grey5);
  }
`

const Card = props => {
  const { children, width, height } = props

  return (
    <StyledCard width={width} height={height}>
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string
}

export default Card

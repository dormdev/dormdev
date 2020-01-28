import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledMain = styled.main`
  margin-top: 10rem;
  margin-bottom: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 4rem;
  }

  a {
    margin: 1rem 0;
  }
`

const StyledItem = styled.div`
  margin: 2rem auto;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4,
  h6 {
    text-align: center;
  }

  h4 {
    margin: 0.25rem 0;
  }

  h6 {
    margin: 0 0 2rem;
    color: var(--grey5);
  }

  img {
    margin-bottom: 2rem;
    width: 7rem;

    @media all and (min-width: 800px) {
      margin-right: 4rem;
      margin-bottom: 0;
    }
  }

  @media all and (min-width: 800px) {
    flex-direction: row;

    h4,
    h6 {
      text-align: left;
    }

    p {
      margin: 1.5rem 0;
    }

    li,
    a {
      font-size: 1rem;
      font-weight: 400;

      @media screen and (min-width: 20rem) {
        font-size: calc(1rem + 0.25 * ((100vw - 20rem) / 50));
      }

      @media screen and (min-width: 70rem) {
        font-size: 1.25rem;
      }
    }
  }
`

const Description = styled.div`
  text-align: left;
  width: 100%;
  overflow: scroll;
`

const Item = props => {
  const { logo, children } = props

  return (
    <StyledItem>
      <img src={logo} alt="" />
      <Description>{children}</Description>
    </StyledItem>
  )
}

Item.propTypes = {
  logo: PropTypes.string,
  children: PropTypes.node
}

export default Item

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

import DocumentHead from 'components/Head'
import Global from 'layout/Global'
import Header from 'components/Header'
import { SmallFooter } from 'components/Footer'
import Button from 'components/Button'
import { StyledHero } from 'components/homepage/HeroSection'

const meditation = keyframes`
  from {
    transform: translateY(-8px)
  }

  to {
    transform: translateY(0);
  }
`

const Meditating = styled.img`
  width: 50%;
  max-width: 20rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  animation: ${meditation} 2s alternate infinite ease-in-out;
`

const Error = ({ statusCode }) => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <StyledHero>
        <Meditating src="/assets/meditating.svg" alt="" />
        <h1>{statusCode || 'Client Error'}!</h1>
        <p>Oops! Nothing to see here.</p>
      </StyledHero>
      <SmallFooter />
    </Global>
  </>
)

Error.propTypes = {
  statusCode: PropTypes.number
}

Error.getInitialProps = ({ res, err }) => {
  let statusCode

  if (res) {
    statusCode = res.statusCode
  } else if (err) {
    statusCode = err.statusCode
  } else {
    statusCode = 404
  }

  return { statusCode }
}

export default Error

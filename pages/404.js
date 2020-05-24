import React from 'react'
import styled, { keyframes } from 'styled-components'

import DocumentHead from 'components/Head'
import Global from 'layout/Global'
import Header from 'components/Header'
import { SmallFooter } from 'components/Footer'
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

const Error = () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <StyledHero>
        <Meditating src="/assets/meditating.svg" alt="" />
        <h1>404!</h1>
        <p>Oops! Nothing to see here.</p>
      </StyledHero>
      <SmallFooter />
    </Global>
  </>
)

export default Error

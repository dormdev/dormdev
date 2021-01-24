import React from 'react'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-image'
import Typed from 'react-typed'

import { checkWebP } from 'utilities/checkWebP'

const webSupported = checkWebP()

export const StyledHero = styled.section`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    position: relative;
    font-size: 2rem;
    font-weight: 900;
    margin: 3rem auto 2rem;
    max-width: 45rem;

    @media screen and (min-width: 20rem) {
      font-size: calc(2rem + 2 * ((100vw - 20rem) / 50));
    }

    @media screen and (min-width: 70rem) {
      font-size: 4rem;
    }
  }

  p {
    position: relative;
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 42rem;
  }

  button {
    margin: 3rem auto 0;
  }
`

const Illustration = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;
  pointer-events: none;
`

const HeroSection = () => (
  <StyledHero aria-label="hero">
    <Illustration>
      <ProgressiveImage
        src={
          webSupported ? '/assets/background.webp' : '/assets/background.png'
        }
        placeholder="/assets/background-placeholder.png"
      >
        {src => <img src={src} alt="" />}
      </ProgressiveImage>
    </Illustration>
    <h1>
      Home of student <br />{' '}
      <Typed
        strings={['developers.', 'designers.', 'doers.']}
        typeSpeed={60}
        backSpeed={80}
        startDelay={200}
        backDelay={3000}
        loop
      />
    </h1>
    <p>
      Showcasing the best learning, tools and resources – handpicked for quality
      with exclusive offers and discounts for students.
    </p>
  </StyledHero>
)

export default HeroSection

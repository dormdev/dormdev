import React from 'react'
import ProgressiveImage from 'react-progressive-image'

import { StyledHero } from './homepage/HeroSection'

export default () => (
  <StyledHero>
    <ProgressiveImage
      src="/assets/construction.png"
      placeholder="/assets/background-placeholder.png"
    >
      {src => <img src={src} alt="" width="30%" />}
    </ProgressiveImage>
    <h1>Under Construction!</h1>
  </StyledHero>
)

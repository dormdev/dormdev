import React from 'react'
import styled from 'styled-components'

import Subscribe from '../Subscribe'

const StyledSection = styled.section`
  position: relative;
  margin: 2rem 0;
  text-align: center;
  margin: 1rem 0;

  p {
    margin-top: 1rem;
    color: var(--grey4);
    font-style: italic;
    font-size: 0.9375rem;

    @media all and (min-width: 500px) {
      font-size: 1rem;
    }
  }
`

const NewsletterSection = () => (
  <StyledSection aria-label="subscribe">
    <Subscribe />
    <p>No spam, ever. Unsubscribe at any time.</p>
  </StyledSection>
)

export default NewsletterSection

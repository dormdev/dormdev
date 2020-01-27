import React from 'react'
import styled from 'styled-components'

import Subscribe from '../Subscribe'

const SubscribeSection = styled.section`
  text-align: center;
  margin: 1rem 0;

  h5 {
    margin-bottom: 1.5rem;
  }

  p {
    margin-top: 1rem;
    color: var(--grey4);
    font-style: italic;
    font-size: 0.9rem;

    @media all and (min-width: 500px) {
      font-size: 1rem;
    }
  }
`

export default () => (
  <SubscribeSection aria-label="subscribe">
    <h5>Subscribe to the email newsletter!</h5>
    <Subscribe />
    <p>No spam, ever. Unsubscribe at any time.</p>
  </SubscribeSection>
)

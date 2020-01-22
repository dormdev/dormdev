import React from 'react'
import styled from 'styled-components'

import DocumentHead from '~/components/Head'
import Global from '~/layout/Global'
import Header from '~/components/Header'
import Hero from '~/components/Hero'
import Subscribe from '~/components/Subscribe'
import Footer from '~/components/Footer'

const SubscribeSection = styled.section`
  text-align: center;

  h5 {
    margin-bottom: 1.5rem;
  }

  p {
    margin-top: 1rem;
    color: var(--grey4);
    font-style: italic;
    font-size: 1rem;
  }
`

export default () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <Hero />
      <SubscribeSection>
        <h5>Subscribe to the email newsletter!</h5>
        <Subscribe />
        <p>No spam, ever. Unsubscribe at any time.</p>
      </SubscribeSection>
      <Footer />
    </Global>
  </>
)

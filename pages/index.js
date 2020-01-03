import React from 'react'

import DocumentHead from '~/components/Head'
import Global from '~/layout/Global'
import Header from '~/components/Header'
import Hero from '~/components/Hero'

export default () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <Hero />
    </Global>
  </>
)

import React from 'react'

import DocumentHead from '~/components/Head'
import Global from '~/layout/Global'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import UnderConstruction from '~/components/UnderConstruction'

export default () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <UnderConstruction />
      <Footer />
    </Global>
  </>
)

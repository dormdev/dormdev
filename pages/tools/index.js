import React from 'react'
import Link from 'next/link'

import DocumentHead from '~/components/Head'
import Global from '~/layout/Global'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { StyledMain } from '~/components/Item'

export default () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <StyledMain>
        <h1>All Tools</h1>
        <Link href="/tools/workflow">
          <a>Workflow</a>
        </Link>
        <Link href="/tools/prototyping">
          <a>Prototyping</a>
        </Link>
        <Link href="/tools/cloud">
          <a>Cloud Services</a>
        </Link>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

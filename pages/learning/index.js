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
        <h1>All Learning</h1>
        <Link href="/learning/design">
          <a>Design</a>
        </Link>
        <Link href="/learning/frontend">
          <a>Front End</a>
        </Link>
        <Link href="/learning/algorithms">
          <a>Data Structures & Algorithms</a>
        </Link>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

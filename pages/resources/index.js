import React from 'react'
import Link from 'next/link'

import DocumentHead from 'components/Head'
import Global from 'layout/Global'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { StyledMain } from 'components/Item'

const ResourcesIndex = () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <StyledMain>
        <h1>All Resources</h1>
        <Link href="/resources/jobs">
          <a>Job Search</a>
        </Link>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

export default ResourcesIndex

import React from 'react'

import DocumentHead from '~/components/Head'
import Global from '~/layout/Global'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Item, { StyledMain } from '~/components/Item'

export default () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <StyledMain>
        <h1>Job Search</h1>
        <Item logo="/assets/triplebyte.png">
          <h4>Triplebyte</h4>
          <p>
            Triplebyte helps developers find great companies to work at. Go
            through a technical interview process get feedback on your strengths
            and weaknesses. Triplebyte will match you with companies that are
            looking for people with your specific skill sets, and then fast
            track you through their hiring processes.
          </p>
          <ul>
            <li>
              Referral Link –{' '}
              <a
                href="https://dorm.dev/triplebyte"
                target="_blank"
                rel="noopener noreferrer"
              >
                dorm.dev/triplebyte
              </a>
            </li>
          </ul>
        </Item>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

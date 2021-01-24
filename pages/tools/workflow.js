import React from 'react'

import DocumentHead from 'components/Head'
import Global from 'layout/Global'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Item, { StyledMain } from 'components/Item'

const Workflow = () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <StyledMain>
        <h1>Tools: Workflow</h1>
        <Item logo="/assets/notion-logo.svg">
          <h4>Notion</h4>
          <p>
            A new tool that blends your everyday work (notes, tasks, wikis) in
            one app. It's the all-in-one workspace for you and your team.
          </p>
          <ul>
            <li>
              Student Price – Free Personal Plan ($4/month value) + $10 credit
            </li>
            <li>
              Referral Link –{' '}
              <a href="https://dorm.dev/notion">dorm.dev/notion</a>
            </li>
          </ul>
        </Item>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

export default Workflow

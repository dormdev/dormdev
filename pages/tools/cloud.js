import React from 'react'

import DocumentHead from 'components/Head'
import Global from 'layout/Global'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Item, { StyledMain } from 'components/Item'

const Cloud = () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <StyledMain>
        <h1>Tools: Cloud Services</h1>
        <Item logo="/assets/heroku.png">
          <h4>Heroku</h4>
          <p>
            Heroku is a cloud-based, platform as a service (PaaS) for building,
            running, and managing apps. Students use Heroku to learn and grow
            their skills by taking advantage of the platform’s fully-managed
            runtime environment, coupled with a wide range of tools and
            integrated services. Heroku makes app deployment fast and easy.
          </p>
          <ul>
            <li>
              Student Price – Free Hobby Dyno ($168 value) through{' '}
              <a href="https://education.github.com/pack">
                GitHub Developer Pack
              </a>
            </li>
            <li>
              Link –{' '}
              <a href="https://www.heroku.com/github-students">
                heroku.com/github-students
              </a>
            </li>
          </ul>
        </Item>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

export default Cloud

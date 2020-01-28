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
        <h1>Tools: Cloud Services</h1>
        <Item logo="https://brand.heroku.com/static/media/heroku-logo-solid.ab0c1b46.svg">
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
              <a
                href="https://education.github.com/pack"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Developer Pack
              </a>
            </li>
            <li>
              Link –{' '}
              <a
                href="https://www.heroku.com/github-students"
                target="_blank"
                rel="noopener noreferrer"
              >
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

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
        <h1>Learning the Front End</h1>
        <Item logo="/assets/everylayout.png">
          <h4>Every Layout</h4>
          <h6>Instructors: Heydon Pickering & Andy Bell</h6>
          <p>
            Through a series of simple, composable layouts, Every Layout will
            teach you how to better harness the built-in algorithms that power
            browsers and CSS.
          </p>
          <ul>
            <li>
              Student Price – Free through{' '}
              <a
                href="https://every-layout.dev/honour-system/"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Honour System licence".
              </a>
            </li>
            <li>
              Link –{' '}
              <a
                href="https://every-layout.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://every-layout.dev
              </a>
            </li>
          </ul>
        </Item>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

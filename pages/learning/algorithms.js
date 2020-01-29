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
        <h1>Learning Data Structures and Algorithms</h1>
        <Item logo="/assets/cs50.png">
          <h4>Harvard CS50: Introduction to Computer Science</h4>
          <p>
            CS50x is Harvard University's introduction to the intellectual
            enterprises of computer science and the art of programming for
            majors and non-majors alike, with or without prior programming
            experience. An entry-level course taught by David J. Malan, CS50x
            teaches students how to think algorithmically and solve problems
            efficiently.
          </p>
          <ul>
            <li>
              Student Price – Free through
              <a href="https://www.edx.org/course/cs50s-introduction-to-computer-science">
                edX
              </a>
            </li>
            <li>
              Link –{' '}
              <a href="https://www.edx.org/course/cs50s-introduction-to-computer-science">
                edx.org/course/cs50s-introduction-to-computer-science
              </a>
            </li>
          </ul>
        </Item>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

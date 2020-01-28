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
        <Item logo="https://leetcode.com/static/images/LeetCode_logo.png">
          <h4>LeetCode</h4>
          <p>
            Level up your coding skills and quickly land a job. This is the best
            place to expand your knowledge and get prepared for your next
            interview.
          </p>
          <ul>
            <li>Student Price – $99/yr, currently unavailable</li>
            <li>
              Link –{' '}
              <a
                href="https://leetcode.com/students"
                target="_blank"
                rel="noopener noreferrer"
              >
                leetcode.com/students
              </a>
            </li>
          </ul>
        </Item>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

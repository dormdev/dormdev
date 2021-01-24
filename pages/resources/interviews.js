import React from 'react'

import DocumentHead from 'components/Head'
import Global from 'layout/Global'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Item, { StyledMain } from 'components/Item'

const Interviews = () => (
  <>
    <DocumentHead />
    <Global>
      <Header />
      <StyledMain>
        <h1>Learning Data Structures and Algorithms</h1>
        <Item logo="/assets/leetcode.png">
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
              <a href="https://leetcode.com/students">leetcode.com/students</a>
            </li>
          </ul>
        </Item>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

export default Interviews

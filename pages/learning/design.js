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
        <h1>Learning Design</h1>
        <Item logo="/assets/designfordevelopers.png">
          <h4>Design for Developers</h4>
          <h6>Instructor: Sarah Drasner</h6>
          <p>
            Learn how to become self-sufficient for the entire process of
            execution from concept to design to implementation. Also, understand
            the rules for designing to become a better collaborator to design
            team members and better able to execute the creation of complex and
            beautiful front-end experiences!
          </p>
          <ul>
            <li>
              Student Price – Free through{' '}
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
                href="https://frontendmasters.com/courses/design-for-developers"
                target="_blank"
                rel="noopener noreferrer"
              >
                frontendmasters.com/courses/design-for-developers
              </a>
            </li>
          </ul>
        </Item>
        <Item
          logo="/assets/refactoringui.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Refactoring UI</h4>
          <h6>Instructors: Adam Wathan & Steve Schoger</h6>
          <p>
            Make your ideas look awesome, without relying on a designer. Learn
            how to design beautiful user interfaces by yourself using specific
            tactics explained from a developer's point-of-view.
          </p>
          <ul>
            <li>
              Student Price – $79 (original $249) for Complete Package or $29
              (original $99) for Essentials. For student discount, email
              support@refactoringui.com.
            </li>
            <li>
              Link –{' '}
              <a
                href="https://refactoringui.com/book"
                target="_blank"
                rel="noopener noreferrer"
              >
                refactoringui.com/book
              </a>
            </li>
          </ul>
        </Item>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

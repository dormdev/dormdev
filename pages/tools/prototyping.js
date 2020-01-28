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
        <h1>Tools: Prototyping</h1>
        <Item logo="/assets/figma.svg">
          <h4>Figma</h4>
          <p>
            Figma is an end-to-end, web-based design and prototyping tool.
            Create, collaboratate, and present in the same tool, with one single
            source-of-truth.
          </p>
          <ul>
            <li>Student Price – Free Professional Plan ($15/month value)</li>
            <li>
              Link –{' '}
              <a href="https://www.figma.com/education">figma.com/education</a>
            </li>
          </ul>
        </Item>
        <Item logo="/assets/sketch.svg">
          <h4>Sketch</h4>
          <p>
            Sketch is a native macOS design toolkit built to help you create
            your best work — from your earliest ideas, through to final artwork.
          </p>
          <ul>
            <li>Student Price – $49</li>
            <li>
              Link –{' '}
              <a href="https://www.sketch.com/store/edu">
                sketch.com/store/edu
              </a>
            </li>
          </ul>
        </Item>
      </StyledMain>
      <Footer />
    </Global>
  </>
)

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Logo } from './Header'
import DarkSlider from './DarkSlider'

const StyledFooter = styled.footer`
  margin-top: 4rem;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column-reverse;

  @media all and (min-width: 885px) {
    border-top: 1px solid var(--grey9);
    flex-direction: row;
    justify-content: flex-start;
  }
`

const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;

  @media all and (min-width: 885px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 0;
  }
`

const Block = styled.div`
  max-width: 15rem;
  margin-right: ${props => props.marginRight || '2rem'};

  h6 {
    position: relative;
    width: 100%;
    margin: 0.5rem 0 0;
    font-size: 1rem;

    @media all and (max-width: 884px) {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.5rem;
        width: calc(100vw - 2rem);
        height: 1px;
        background: var(--grey9);
      }
    }
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    margin-top: 0.5rem;
  }

  a {
    font-size: 0.9rem;
    text-decoration: none;
  }
`

const LogoBlock = styled(Block)`
  margin-right: 2rem;

  img {
    width: 2.5rem !important;
  }

  span {
    font-size: 1.2rem;
  }

  p,
  a.terms-privacy {
    color: var(--grey4);
    font-size: 0.85rem;
  }

  a.terms-privacy {
    text-decoration: underline;

    &:hover {
      color: black;
    }
  }
`

export default () => (
  <StyledFooter>
    <LogoBlock>
      <Logo />
      <p style={{ marginTop: '1rem' }}>
        Home of student developers. The best learning, tools, resources and
        support.
      </p>
      <p style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
        © {new Date().getFullYear()} Dorm Dev, LLC
      </p>
      <Link href="/terms-privacy">
        <a className="terms-privacy">Terms & Privacy</a>
      </Link>
      <DarkSlider />
    </LogoBlock>
    <FooterNavigation>
      <Block>
        <h6>Links</h6>
        <ul>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/join">
              <a>Sign Up</a>
            </Link>
          </li>
          <li>
            <a
              href="https://dorm.dev/medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium Blog
            </a>
          </li>
          <li>
            <a
              href="https://dorm.dev/youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Channel
            </a>
          </li>
        </ul>
      </Block>
      <Block>
        <h6>Platform & Services</h6>
        <ul>
          <li>
            <Link href="/platform">
              <a>Overview</a>
            </Link>
          </li>
          <li>
            <a
              href="https://dorm.dev/verification"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Verification
            </a>
          </li>
          <li>
            <a
              href="https://dorm.dev/changelog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Changelog
            </a>
          </li>
          <li>
            <a
              href="https://status.dormdev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Status
            </a>
          </li>
        </ul>
      </Block>
      <Block>
        <h6>Company</h6>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/mission">
              <a>Mission</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Team</a>
            </Link>
          </li>
        </ul>
      </Block>
      <Block marginRight="0">
        <h6>Support</h6>
        <ul>
          <li>
            <a
              href="https://dorm.dev/help"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help Center
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/DormDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter @DormDev
            </a>
          </li>
          <li>
            <a
              href="https://spectrum.chat/dormdev?tab=chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us
            </a>
          </li>
          <li>
            <a
              href="mailto:support@dormdev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email us
            </a>
          </li>
        </ul>
      </Block>
    </FooterNavigation>
  </StyledFooter>
)

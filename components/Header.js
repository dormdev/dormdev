import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Popover from 'react-tiny-popover'
import { ChevronDown, Menu, X } from 'react-feather'

import Button from './Button'

const LogoContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
    text-decoration: none;

    &:hover {
      color: black;
    }

    img {
      margin-right: 1rem;
      width: 3rem;
    }

    @media all and (max-width: 375px) {
      span {
        display: none;
      }
    }
  }
`

export const Logo = () => (
  <LogoContainer>
    <Link href="/">
      <a>
        <img src="/assets/logo.svg" alt="" />
        <span>DormDev</span>
      </a>
    </Link>
  </LogoContainer>
)

const StyledHeader = styled.header`
  background-color: #fffefc;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  padding: 1rem;
  border-bottom: 1px solid #fffefc;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const ContextualMenu = styled.div`
  svg {
    cursor: pointer;
  }

  @media all and (min-width: 885px) {
    display: none;
  }
`

const List = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fffefc;
  padding: 1rem;
  overflow: scroll;

  ul {
    padding: 0;
    list-style: none;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    li {
      margin-top: 1rem;

      a {
        display: block;
        position: relative;
        font-size: 1rem;
        line-height: 2.35;
        width: 100%;
        color: black;
        text-decoration: none;

        &:hover {
          color: var(--grey3);
        }
      }
    }
  }
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`

const Title = styled.div`
  font-size: ${props => props.size || '1rem'};
  text-transform: uppercase;
  color: var(--grey5);
  margin: ${props => props.margin || '2rem'};
`

const Nav = styled.nav`
  display: none;

  @media all and (min-width: 885px) {
    display: flex;
    align-items: center;

    a {
      margin: 0 1rem;
      font-size: 0.9rem;
      text-decoration: none;
    }

    hr {
      background: var(--grey7);
      width: 1px;
      height: 1rem;
      border: 0;
      margin: 0 1rem;
    }
  }
`

const PopoverContent = styled.div`
  min-width: 15rem;

  a {
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      color: var(--grey3);
    }
  }
`

const PopoverContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`

const PopoverContentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;

  a {
    color: black;
    text-decoration: none;
    margin-top: 0.5rem;
    font-size: 0.9rem;

    &:hover {
      color: var(--grey3);
    }
  }
`

export const LinkLabel = styled.div`
  align-self: center;
  margin-bottom: 8px;
  padding: 1px 3px;
  background: ${props => props.bg || 'var(--grey3)'};
  color: white;
  border-radius: 3px;
  margin-left: 0.25rem;
  font-size: 9px;
  line-height: 1.3;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
`

const LearningPopover = () => (
  <PopoverContent id="learning-popover" role="menu" tabIndex={-1}>
    <Link href="/learning">
      <a>All Tutorials, Courses & Learning Material</a>
    </Link>
    <PopoverContentContainer>
      <PopoverContentSection>
        <Title size="0.8rem" margin="0 0 0.5rem">
          High-Level
        </Title>
        <Link href="/learning/design">
          <a>
            Design <LinkLabel bg="#3291ff">New</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/frontend">
          <a>
            Frontend <LinkLabel bg="#3291ff">New</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/backend">
          <a className="inactive">
            Backend <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/mobile">
          <a className="inactive">
            Mobile <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/game-development">
          <a className="inactive">
            Game Development <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/ai">
          <a className="inactive">
            AI / Machine Learning <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/quantum">
          <a className="inactive">
            Quantum Computing <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
      </PopoverContentSection>
      <PopoverContentSection>
        <Title size="0.8rem" margin="0 0 0.5rem">
          Low-Level
        </Title>
        <Link href="/learning/algorithms">
          <a>
            Data Structures & Algorithms <LinkLabel bg="#3291ff">New</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/embedded-systems">
          <a className="inactive">
            Embedded Systems <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/robotics">
          <a className="inactive">
            Robotics <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
      </PopoverContentSection>
      <PopoverContentSection>
        <Title size="0.8rem" margin="0 0 0.5rem">
          Systems
        </Title>
        <Link href="/learning/devops">
          <a className="inactive">
            DevOps <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/security">
          <a className="inactive">
            Security <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
        <Link href="/learning/blockchain">
          <a className="inactive">
            Blockchain <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
      </PopoverContentSection>
    </PopoverContentContainer>
  </PopoverContent>
)

const ToolsPopover = () => (
  <PopoverContent id="tools-popover" role="menu" tabIndex={-1}>
    <Link href="/tools">
      <a>All Tools & Technologies</a>
    </Link>
    <PopoverContentContainer>
      <PopoverContentSection>
        <Title size="0.8rem" margin="0 0 0.5rem">
          Software
        </Title>
        <Link href="/tools/workflow">
          <a>
            Workflow <LinkLabel bg="#3291ff">New</LinkLabel>
          </a>
        </Link>
        <Link href="/tools/prototyping">
          <a>
            Prototyping <LinkLabel bg="#3291ff">New</LinkLabel>
          </a>
        </Link>
        <Link href="/tools/cloud">
          <a>
            Cloud Services <LinkLabel bg="#3291ff">New</LinkLabel>
          </a>
        </Link>
      </PopoverContentSection>
      <PopoverContentSection>
        <Title size="0.8rem" margin="0 0 0.5rem">
          Hardware
        </Title>
        <Link href="/tools/computers">
          <a className="inactive">
            Computer Parts <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
        <Link href="/tools/sensors">
          <a className="inactive">
            Sensors <LinkLabel>Soon</LinkLabel>
          </a>
        </Link>
      </PopoverContentSection>
    </PopoverContentContainer>
  </PopoverContent>
)

const ResourcesPopover = () => (
  <PopoverContent id="resources-popover" role="menu" tabIndex={-1}>
    <PopoverContentSection>
      <Title size="0.8rem" margin="0 0 0.5rem">
        Resources for Developers
      </Title>
      <Link href="/resources/jobs">
        <a>
          Job Search <LinkLabel bg="#3291ff">New</LinkLabel>
        </a>
      </Link>
      <Link href="/resources/interviews">
        <a className="inactive">
          Coding Interviews <LinkLabel>Soon</LinkLabel>
        </a>
      </Link>
      <Link href="/resources/career">
        <a className="inactive">
          Career Development <LinkLabel>Soon</LinkLabel>
        </a>
      </Link>
      <Link href="/resources/startups">
        <a className="inactive">
          Startups <LinkLabel>Soon</LinkLabel>
        </a>
      </Link>
    </PopoverContentSection>
  </PopoverContent>
)

const CommunityPopover = () => (
  <PopoverContent id="community-popover" role="menu" tabIndex={-1}>
    <PopoverContentSection>
      <Title size="0.8rem" margin="0 0 0.5rem">
        Join the discussion
      </Title>
      <a
        href="https://spectrum.chat/dormdev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spectrum
      </a>
      <a
        href="https://www.facebook.com/groups/dormdev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook Group
      </a>
      <a
        href="https://www.reddit.com/r/DormDev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Subreddit
      </a>
    </PopoverContentSection>
  </PopoverContent>
)

export default () => {
  const [menu, setMenu] = useState(false)
  const [learningPopover, setLearningPopover] = useState(false)
  const [toolsPopover, setToolsPopover] = useState(false)
  const [resourcesPopover, setResourcesPopover] = useState(false)
  const [communityPopover, setCommunityPopover] = useState(false)

  const focusPopover = id => {
    setTimeout(() => {
      const popover = document.getElementById(id)
      if (popover) {
        popover.focus()
      }
    }, 0)
  }

  const handleResize = useCallback(() => {
    const windowSize = window.innerWidth
    if (menu === true && windowSize >= 885) {
      setMenu(false)
      document.body.style.overflow = 'auto'
    }
  }, [menu])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const headerElement = document.getElementsByTagName('header')[0]
      const headerPosition =
        headerElement.offsetTop + headerElement.offsetHeight - 48

      window.onscroll = function() {
        if (window.pageYOffset <= headerPosition) {
          headerElement.style.borderBottom = '1px solid #fffefc'
          headerElement.style.padding = '1rem'
        } else {
          headerElement.style.borderBottom = '1px solid var(--grey9)'
          headerElement.style.padding = '0.3rem 1rem'
        }
      }

      window.addEventListener('resize', handleResize)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.onscroll = null
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [handleResize])

  return (
    <StyledHeader>
      <Logo />
      <ContextualMenu>
        {menu ? (
          <List>
            <ListHeader>
              <Logo />
              <X
                size={36}
                onClick={() => {
                  setMenu(false)
                  document.body.style.overflow = 'auto'
                }}
              />
            </ListHeader>
            <ul>
              {/* <li>
                <Link href="/login">
                  <a tabIndex={-1}>
                    <Button
                      backgroundColor="#FFF"
                      textColor="#000"
                      border="1px solid var(--grey7)"
                      width="100%"
                      centered
                      hover="border-color: black"
                    >
                      Login
                    </Button>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/join">
                  <a tabIndex={-1}>
                    <Button width="100%" fontWeight="600" centered>
                      Join
                    </Button>
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href="/survey">
                  <a tabIndex={-1}>
                    <Button width="100%" fontWeight="600" centered>
                      Survey
                    </Button>
                  </a>
                </Link>
              </li>
              <hr />
              <Title>Main Navigation</Title>
              <li>
                <Link href="/learning">
                  <a>Learning</a>
                </Link>
              </li>
              <li>
                <Link href="/tools">
                  <a>Tools</a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a>Resources</a>
                </Link>
              </li>
              <hr />
              <Title>Community</Title>
              <li>
                <a
                  href="https://spectrum.chat/dormdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spectrum
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/groups/dormdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Group
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/DormDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subreddit
                </a>
              </li>
            </ul>
          </List>
        ) : (
          <Menu
            style={{ marginTop: '0.3rem' }}
            size={36}
            onClick={() => {
              setMenu(true)
              document.body.style.overflow = 'hidden'
            }}
          />
        )}
      </ContextualMenu>
      <Nav>
        <Popover
          containerClassName="popover"
          isOpen={learningPopover}
          onClickOutside={() => setLearningPopover(false)}
          position="bottom"
          content={LearningPopover}
        >
          <a
            role="button"
            tabIndex="0"
            onClick={() => {
              setLearningPopover(!learningPopover)
              focusPopover('learning-popover')
            }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                setLearningPopover(!learningPopover)
                focusPopover('learning-popover')
              }
            }}
          >
            Learning{' '}
            <ChevronDown size={16} style={{ transform: 'translateY(2px)' }} />
          </a>
        </Popover>
        <Popover
          containerClassName="popover"
          isOpen={toolsPopover}
          onClickOutside={() => setToolsPopover(false)}
          position="bottom"
          content={ToolsPopover}
        >
          <a
            role="button"
            tabIndex="0"
            onClick={() => {
              setToolsPopover(!toolsPopover)
              focusPopover('tools-popover')
            }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                setToolsPopover(!toolsPopover)
                focusPopover('tools-popover')
              }
            }}
          >
            Tools{' '}
            <ChevronDown size={16} style={{ transform: 'translateY(2px)' }} />
          </a>
        </Popover>
        <Popover
          containerClassName="popover"
          isOpen={resourcesPopover}
          onClickOutside={() => setResourcesPopover(false)}
          position="bottom"
          content={ResourcesPopover}
        >
          <a
            role="button"
            tabIndex="0"
            onClick={() => {
              setResourcesPopover(!resourcesPopover)
              focusPopover('resources-popover')
            }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                setResourcesPopover(!resourcesPopover)
                focusPopover('resources-popover')
              }
            }}
          >
            Resources{' '}
            <ChevronDown size={16} style={{ transform: 'translateY(2px)' }} />
          </a>
        </Popover>
        <Popover
          containerClassName="popover"
          isOpen={communityPopover}
          onClickOutside={() => setCommunityPopover(false)}
          position="bottom"
          content={CommunityPopover}
        >
          <a
            role="button"
            tabIndex="0"
            onClick={() => {
              setCommunityPopover(!communityPopover)
              focusPopover('community-popover')
            }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                setCommunityPopover(!communityPopover)
                focusPopover('community-popover')
              }
            }}
          >
            Community{' '}
            <ChevronDown size={16} style={{ transform: 'translateY(2px)' }} />
          </a>
        </Popover>
        <hr />
        {/* <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/join">
          <a tabIndex={-1}>
            <Button fontWeight="600">Join</Button>
          </a>
        </Link> */}
        <Link href="/survey">
          <a tabIndex={-1}>
            <Button fontWeight="600">Survey</Button>
          </a>
        </Link>
      </Nav>
    </StyledHeader>
  )
}

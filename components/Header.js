import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { ChevronDown, Menu, X } from "react-feather";
import Popover from "react-tiny-popover";

import Button from "./Button";

const LogoContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: black;

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
`;

export const Logo = () => (
  <LogoContainer>
    <Link href="/">
      <a>
        <img src="/assets/logo.svg" alt="" />
        <span>DormDev</span>
      </a>
    </Link>
  </LogoContainer>
);

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  z-index: 99;
`;

const ContextualMenu = styled.div`
  svg {
    cursor: pointer;
  }

  @media all and (min-width: 768px) {
    display: none;
  }
`;

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

    li {
      margin-top: 1rem;

      a {
        display: block;
        position: relative;
        font-size: 1.25rem;
        line-height: 2.35;
        width: 100%;
        color: black;

        &:hover {
          color: var(--grey3);
        }
      }
    }
  }
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: ${props => props.size || "1rem"};
  text-transform: uppercase;
  color: var(--grey5);
  margin: ${props => props.margin || "2rem"};
`;

const Nav = styled.nav`
  display: none;

  @media all and (min-width: 768px) {
    display: flex;
    align-items: center;

    a {
      margin: 0 1rem;
      font-size: 0.9rem;
    }

    hr {
      background: var(--grey7);
      width: 1px;
      height: 1rem;
      border: 0;
      margin: 0 1rem;
    }
  }
`;

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
`;

const PopoverContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

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
`;

const ToolsPopover = () => {
  return (
    <PopoverContent id="tools-popover" role="menu" tabIndex={-1}>
      <Link href="/tools">
        <a>All Tools & Technologies</a>
      </Link>
      <PopoverContentContainer>
        <PopoverContentSection>
          <Title size="0.8rem" margin="0 0 0.5rem">
            Software
          </Title>
          <Link href="/frontend">
            <a>Frontend</a>
          </Link>
          <Link href="/mobile">
            <a>Mobile</a>
          </Link>
          <Link href="/backend">
            <a>Backend</a>
          </Link>
          <Link href="/devops">
            <a>DevOps</a>
          </Link>
        </PopoverContentSection>
        <PopoverContentSection>
          <Title size="0.8rem" margin="0 0 0.5rem">
            Hardware
          </Title>
          <Link href="/computers">
            <a>Computers</a>
          </Link>
          <Link href="/sensors">
            <a>Sensors</a>
          </Link>
        </PopoverContentSection>
      </PopoverContentContainer>
    </PopoverContent>
  );
};

const CommunityPopover = () => (
  <PopoverContent id="community-popover" role="menu" tabIndex={-1}>
    <PopoverContentSection>
      <Title size="0.8rem" margin="0 0 0.5rem">
        Join the discussion
      </Title>
      <a href="https://spectrum.chat/dormdev">Spectrum</a>
      <a href="https://www.facebook.com/groups/dormdev">Facebook Group</a>
      <a href="https://www.reddit.com/r/DormDev">Subreddit</a>
    </PopoverContentSection>
  </PopoverContent>
);

export default () => {
  const [menu, setMenu] = useState(false);
  const [communityPopover, setCommunityPopover] = useState(false);
  const [toolsPopover, setToolsPopover] = useState(false);

  const focusPopover = id => {
    setTimeout(() => {
      const popover = document.getElementById(id);
      popover && popover.focus();
    }, 0);
  };

  return (
    <Header>
      <Logo />
      <ContextualMenu>
        {menu ? (
          <List>
            <ListHeader>
              <Logo />
              <X size={36} onClick={() => setMenu(false)} />
            </ListHeader>
            <ul>
              <li>
                <Link href="/login">
                  <a>
                    <Button
                      backgroundColor="#FFF"
                      textColor="#000"
                      width="100%"
                      centered
                    >
                      Login
                    </Button>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/join">
                  <a>
                    <Button width="100%" centered>
                      Join
                    </Button>
                  </a>
                </Link>
              </li>
              <hr />
              <Title>General</Title>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a>Courses</a>
                </Link>
              </li>
              <li>
                <Link href="/tools">
                  <a>Tools & Tech</a>
                </Link>
              </li>
              <hr />
              <Title>Community</Title>
              <li>
                <a href="https://spectrum.chat/dormdev">Spectrum</a>
              </li>
              <li>
                <a href="https://www.facebook.com/groups/dormdev">
                  Facebook Group
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/r/DormDev">Subreddit</a>
              </li>
            </ul>
          </List>
        ) : (
          <Menu size={32} onClick={() => setMenu(true)} />
        )}
      </ContextualMenu>
      <Nav>
        <Link href="/courses">
          <a>Courses</a>
        </Link>
        <Popover
          containerClassName="popover"
          isOpen={toolsPopover}
          onClickOutside={() => setToolsPopover(false)}
          position={"bottom"}
          content={ToolsPopover}
        >
          <a
            role="button"
            tabIndex="0"
            onClick={() => {
              setToolsPopover(!toolsPopover);
              focusPopover("tools-popover");
            }}
            onKeyPress={event => {
              if (event.key === "Enter") {
                setToolsPopover(!toolsPopover);
                focusPopover("tools-popover");
              }
            }}
          >
            Tools{" "}
            <ChevronDown size={16} style={{ transform: "translateY(2px)" }} />
          </a>
        </Popover>
        <Popover
          containerClassName="popover"
          isOpen={communityPopover}
          onClickOutside={() => setCommunityPopover(false)}
          position={"bottom"}
          content={CommunityPopover}
        >
          <a
            role="button"
            tabIndex="0"
            onClick={() => {
              setCommunityPopover(!communityPopover);
              focusPopover("community-popover");
            }}
            onKeyPress={event => {
              if (event.key === "Enter") {
                setCommunityPopover(!communityPopover);
                focusPopover("community-popover");
              }
            }}
          >
            Community{" "}
            <ChevronDown size={16} style={{ transform: "translateY(2px)" }} />
          </a>
        </Popover>
        <Link href="/about">
          <a>About</a>
        </Link>
        <hr />
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/join">
          <a>
            <Button>Join</Button>
          </a>
        </Link>
      </Nav>
    </Header>
  );
};

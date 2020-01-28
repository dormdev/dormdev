import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import ItemsCarousel from 'react-items-carousel'
import { ChevronRight, ChevronLeft } from 'react-feather'

import Card from '../Card'

const FeaturedSection = styled.section`
  text-align: center;
  margin: 5rem 0;

  h2 {
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
  }
`

const ChevronButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  color: #757575;
  border: 1px solid var(--grey5);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  height: 3rem;
  width: 3rem;

  svg {
    stroke: var(--grey5);
  }

  &:hover {
    svg {
      stroke: black;
    }
  }
`

const CardImage = styled.img`
  margin: ${props => props.margin || '2rem auto'};
`

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [numberOfCards, setCards] = useState(3)

  const handleResize = useCallback(() => {
    if (
      window.innerWidth >= 1000 &&
      (numberOfCards === 1 || numberOfCards === 2)
    ) {
      setCards(3)
    } else if (
      window.innerWidth < 1000 &&
      window.innerWidth >= 600 &&
      (numberOfCards === 1 || numberOfCards === 3)
    ) {
      setCards(2)
    } else if (
      window.innerWidth < 600 &&
      (numberOfCards === 2 || numberOfCards === 3)
    ) {
      setCards(1)
    }
  }, [numberOfCards])

  useEffect(() => {
    if (window.innerWidth >= 1000) {
      setCards(3)
    } else if (window.innerWidth < 1000 && window.innerWidth >= 600) {
      setCards(2)
    } else if (window.innerWidth < 600) {
      setCards(1)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <FeaturedSection aria-label="featured">
      <h2>Recently Featured</h2>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={20}
        chevronWidth={70}
        firstAndLastGutter
        showSlither
        leftChevron={
          <ChevronButton type="button" aria-label="left chevron">
            <ChevronLeft size={28} />
          </ChevronButton>
        }
        rightChevron={
          <ChevronButton type="button" aria-label="right chevron">
            <ChevronRight size={28} />
          </ChevronButton>
        }
        placeholderItem={<Card height="450px" />}
      >
        <a
          href="https://education.github.com/pack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card height="450px">
            <h4>GitHub Student Developer Pack</h4>
            <CardImage
              src="/assets/gh-backpack.png"
              alt=""
              width="100"
              margin="3rem auto 2rem"
            />
            <p>90+ premium developer tools, free for students</p>
          </Card>
        </a>
        <a
          href="https://edu.google.com/programs/students"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card height="450px">
            <h4>Google for Students</h4>
            <CardImage
              src="/assets/google-edu.png"
              alt=""
              width="150"
              margin="4rem auto 3.5rem"
            />
            <p>
              13 professional-level courses, and $50 Google Cloud credits per
              course
            </p>
          </Card>
        </a>
        <a
          href="https://dorm.dev/notion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card height="450px">
            <h4>Notion for Students</h4>
            <CardImage
              src="/assets/notion-student.png"
              alt=""
              width="125"
              margin="2rem auto"
            />
            <p>Personal Plan, free for students + $10 credit!</p>
          </Card>
        </a>
        <a
          href="https://www.figma.com/education"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card height="450px">
            <h4>Figma for Students</h4>
            <CardImage
              src="/assets/figma-students.png"
              alt=""
              width="200"
              margin="2.5rem auto"
            />
            <p>Professional Plan ($15/month), free for students</p>
          </Card>
        </a>
      </ItemsCarousel>
    </FeaturedSection>
  )
}

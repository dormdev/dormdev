import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import ItemsCarousel from 'react-items-carousel'
import { ChevronRight, ChevronLeft } from 'react-feather'

import Card from '../Card'

const StyledSection = styled.section`
  text-align: center;
  margin: 5rem 0;

  h2 {
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 0.5rem;
    }
  }

  a {
    box-shadow: none;
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

const FeaturedSection = () => {
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
    <StyledSection aria-label="featured">
      <h2>
        Featured Things
        <svg
          width="40"
          height="40"
          enableBackground="new 0 0 512 512"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m256 101.08c-48.245 0-87.501 39.256-87.501 87.501s39.256 87.501 87.501 87.501 87.501-39.256 87.501-87.501-39.256-87.501-87.501-87.501z" />
          <path d="m236.342 399.841-.47-.43-11.149-10.089-26.237-23.738-28.528 3.07-17.458 1.87-4.139.45-13.329 1.43-41.976 89.201 65.004.86 42.075 49.535 47.836-101.64z" />
          <path d="m376.968 372.404-13.329-1.43-4.139-.44-17.458-1.88-28.528-3.07-26.237 23.738-11.149 10.089-.47.43-11.629 10.519 47.836 101.64 42.075-49.535 65.004-.86z" />
          <path d="m409.245 188.582 26.107-58.274-55.374-31.798-13.129-62.494-63.494 6.819-47.355-42.835-47.355 42.836-63.494-6.819-13.129 62.493-55.375 31.797 26.107 58.274-26.107 58.274 55.375 31.797 13.129 62.494 4.84-.52 17.468-1.88 17.458-1.87 4.68-.5h.01l19.038-2.05 14.319 12.949 15.109 13.669 4.71 4.26 6.919 6.259 6.299 5.699 6.299-5.699 6.919-6.259 4.71-4.26 11.749-10.619.01-.01 17.668-15.988 30.857 3.31h.01l3.14.34 7.179.77h.01l17.458 1.88 4.84.52 13.129-62.494 55.375-31.797zm-153.245 117.498c-64.784 0-117.499-52.705-117.499-117.499 0-64.784 52.715-117.499 117.499-117.499s117.499 52.715 117.499 117.499c0 64.794-52.715 117.499-117.499 117.499z" />
        </svg>
      </h2>
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
        <a href="https://education.github.com/pack">
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
        <a href="https://edu.google.com/programs/students">
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
        <a href="https://dorm.dev/notion">
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
        <a href="https://www.figma.com/education">
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
    </StyledSection>
  )
}

export default FeaturedSection

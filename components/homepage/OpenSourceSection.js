import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Star } from 'react-feather'

import { countRepoStars } from '~/utilities/countRepoStars'

const OpenSourceSection = styled.section`
  text-align: center;
  margin: 3rem 0 1rem;

  p {
    margin: 2rem auto;
    padding: 0 1rem;
    max-width: 42rem;
  }
`

const StarCount = styled.div`
  position: relative;
  display: inline-block;
  margin: 2rem 0;

  a {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

const Star1 = styled(Star)`
  position: absolute;
  transform: rotate(25deg);
  left: -3.5rem;
`

const Star2 = styled(Star)`
  position: absolute;
  transform: rotate(-25deg);
  right: -4rem;
`

const Star3 = styled(Star)`
  position: absolute;
  transform: rotate(15deg);
  right: 1rem;
  top: -2.5rem;
`

const Star4 = styled(Star)`
  position: absolute;
  transform: rotate(-15deg);
  left: 1rem;
  bottom: -2.5rem;
`

const ButtonActions = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  * {
    margin-left: 0.15rem;
    margin-right: 0.15rem;
  }
`

export default () => {
  const [starCount, setCount] = useState(null)

  useEffect(() => {
    async function getStars() {
      const user = 'dormdev'
      const repo = 'dormdev'
      const stars = await countRepoStars(user, repo)
      setCount(stars)
    }

    getStars()

    const script = document.createElement('script')
    script.src = 'https://buttons.github.io/buttons.js'
    script.async = 1
    script.defer = 1
    document.getElementsByTagName('head')[0].appendChild(script)

    return () => {
      script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <OpenSourceSection aria-label="open-source">
      <h2>Open Source</h2>
      <p>
        DormDev™ is free and open source, under the Apache 2.0 license.
        Contributions are welcomed and encouraged!
      </p>
      {starCount && (
        <StarCount>
          <a
            href="https://github.com/dormdev/dormdev/stargazers"
            target="_blank"
            rel="noopener noreferrer"
          >
            {starCount} stars on GitHub
          </a>
          <Star1 size={18} />
          <Star2 size={24} />
          <Star3 size={20} />
          <Star4 size={16} />
        </StarCount>
      )}
      <ButtonActions>
        <a
          href="https://github.com/dormdev/dormdev/subscription"
          className="github-button"
          data-icon="octicon-eye"
          data-size="large"
          aria-label="Watch on GitHub"
        >
          Watch
        </a>
        <a
          href="https://github.com/dormdev/dormdev"
          className="github-button"
          data-icon="star"
          data-size="large"
          aria-label="Star on GitHub"
        >
          Star
        </a>
        <a
          href="https://github.com/dormdev/dormdev/fork"
          className="github-button"
          data-icon="octicon-repo-forked"
          data-size="large"
          aria-label="Fork on GitHub"
        >
          Fork
        </a>
      </ButtonActions>
    </OpenSourceSection>
  )
}

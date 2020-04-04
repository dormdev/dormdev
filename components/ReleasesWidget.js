import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledWidget = styled.button`
  color: black;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    color: var(--grey3);
  }
`

export default () => {
  useEffect(() => {
    const script = document.createElement('script')

    async function loadCanny() {
      const promise = new Promise((resolve, reject) => {
        script.src = 'https://canny.io/sdk.js'
        script.async = true
        script.defer = true
        document.body.appendChild(script)
        script.onload = resolve
        script.onerror = reject
      })

      await promise

      window.Canny('initChangelog', {
        appID: process.env.cannyID,
        position: 'top',
        align: 'left'
      })
    }

    loadCanny()

    return () => {
      script.parentNode.removeChild(script)
    }
  }, [])

  return <StyledWidget data-canny-changelog>Release Notes</StyledWidget>
}

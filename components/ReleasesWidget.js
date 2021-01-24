import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledWidget = styled.button`
  color: black;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 0.9375rem;
  cursor: pointer;

  &:hover {
    color: var(--grey3);
  }
`

const ReleasesWidget = () => {
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
        appID: '5e333b1f50c73970fffa0d20',
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

export default ReleasesWidget

import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledWidget = styled.a`
  padding-right: 10px;
`

export default () => {
  useEffect(() => {
    const script = document.createElement('script')

    async function loadHeadway() {
      const promise = new Promise((resolve, reject) => {
        script.src = '//cdn.headwayapp.co/widget.js'
        script.async = true
        script.defer = true
        document.body.appendChild(script)
        script.onload = resolve
        script.onerror = reject
      })

      await promise

      const config = {
        selector: '#releases-widget',
        account: process.env.headwayAccount
      }

      window.Headway.init(config)
    }

    loadHeadway()

    return () => {
      script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <StyledWidget rel="noopener noreferrer">
      <span id="releases-widget">Release Notes</span>
    </StyledWidget>
  )
}

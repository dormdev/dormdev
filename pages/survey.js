import React, { useEffect } from 'react'
import styled from 'styled-components'

import DocumentHead from '~/components/Head'
import Global from '~/layout/Global'

const StyledIframe = styled.iframe`
  width: 100vw;
  height: 100vh;
`

export default () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://embed.typeform.com/embed.js'
    document.head.appendChild(script)

    return () => {
      script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <>
      <DocumentHead />
      <Global>
        <StyledIframe
          title="survey"
          id="typeform-full"
          frameBorder="0"
          src="https://dormdev.typeform.com/to/mDeANr"
        />
      </Global>
    </>
  )
}

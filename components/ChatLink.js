import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const ChatLink = props => {
  const { children } = props

  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = process.env.crispID

    const script = document.createElement('script')
    script.src = 'https://client.crisp.chat/l.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <a
      role="button"
      tabIndex="0"
      onClick={() => window.$crisp.push(['do', 'chat:toggle'])}
      onKeyPress={event =>
        event.key === 'Enter' && window.$crisp.push(['do', 'chat:toggle'])
      }
    >
      {children || 'Message Us'}
    </a>
  )
}

ChatLink.propTypes = {
  children: PropTypes.node
}

export default ChatLink

import React, { useEffect } from 'react'

export default () => {
  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = process.env.crispID

    const script = document.createElement('script')
    script.src = 'https://client.crisp.chat/l.js'
    script.async = 1
    document.getElementsByTagName('head')[0].appendChild(script)

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
      Message Us
    </a>
  )
}

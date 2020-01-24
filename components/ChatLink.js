import React, { useEffect } from 'react'

export default () => {
  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = '663c6c00-7181-49c3-b4e2-e7f0cc7f69b7'

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

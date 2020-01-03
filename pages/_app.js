import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default class MyApp extends App {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      import('webfontloader').then(WebFont => {
        WebFont.load({
          google: {
            families: ['Rubik:300,400,500,700,900&display=swap']
          }
        })
      })
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

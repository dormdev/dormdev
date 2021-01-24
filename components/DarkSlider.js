import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { checkDarkMode } from 'utilities/checkDarkMode'

const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;

  @supports (mix-blend-mode: difference) and (pointer-events: none) {
    background: hsla(0, 0%, 92%, 1);
    mix-blend-mode: difference;
    pointer-events: none;
  }
`

const StyledSlider = styled.button`
  position: relative;
  display: block;
  width: 4.5rem;
  height: 2.5rem;
  margin-top: 2rem;
  border: 0;
  border-radius: 1.5rem;
  transition: 350ms;
  background: ${props =>
    props.dark
      ? 'var(--grey7)'
      : 'linear-gradient(rgba(0, 0, 0, 0.025), rgba(255, 255, 255, 0)), #ddd'};
  box-shadow: 0 0.07rem 0.1rem -0.1rem rgba(0, 0, 0, 0.4) inset,
    0 0.05rem 0.08rem -0.01rem rgba(255, 255, 255, 0.7);
  cursor: not-allowed;

  @supports (mix-blend-mode: difference) and (pointer-events: none) {
    cursor: pointer;
  }

  &::before {
    position: absolute;
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    top: 0.4rem;
    left: ${props => (props.dark ? '2.5rem' : '0.5rem')};
    border-radius: 50%;
    transition: 250ms ease-in-out;
    background: ${props =>
      props.dark ? 'var(--grey3)' : 'linear-gradient(#f5f5f5 10%, #eee)'};
    box-shadow: 0 0.1rem 0.15rem -0.05rem rgba(255, 255, 255, 0.9) inset,
      0 0.5rem 0.3rem -0.1rem ${props => (props.dark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)')};
  }

  &::after {
    position: absolute;
    content: '';
    width: 0.9rem;
    height: 0.9rem;
    top: 0.75rem;
    left: 5rem;
    border-radius: 50%;
    background: ${props =>
      props.dark
        ? 'linear-gradient(rgba(0, 0, 0, 0.07), rgba(255, 255, 255, 0.1)), #4c6;'
        : 'linear-gradient(rgba(0, 0, 0, 0.07), rgba(255, 255, 255, 0.1)), #ddd'};
  }
`

const DarkSlider = () => {
  const [dark, toggleDark] = useState(false)

  useEffect(() => {
    const darkMode = checkDarkMode()
    if (
      CSS.supports('mix-blend-mode', 'difference') &&
      CSS.supports('pointer-events', 'none')
    ) {
      toggleDark(darkMode)
      document.body.style.backgroundColor = darkMode ? '#141310' : '#fffefc'
    }
  }, [])

  return (
    <>
      {dark && <DarkOverlay />}
      <StyledSlider
        aria-label="Dark Mode slider"
        onClick={() => {
          if (
            CSS.supports('mix-blend-mode', 'difference') &&
            CSS.supports('pointer-events', 'none')
          ) {
            toggleDark(!dark)
            document.body.style.backgroundColor = dark ? '#fffefc' : '#141310'
            window.localStorage.setItem('darkMode', dark ? 'false' : 'true')
          }
        }}
        dark={dark}
      />
    </>
  )
}

export default DarkSlider

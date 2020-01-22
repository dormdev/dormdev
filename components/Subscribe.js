import React, { useRef } from 'react'
import styled from 'styled-components'

import Button from './Button'

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`

const EmailInput = styled.input`
  border: 1px solid var(--grey7);
  border-radius: 4px 0 0 4px;
  padding: 0.75rem 1rem;

  &:focus {
    outline: none;
    border-width: 1px;
    border-color: black;
  }

  @media all and (max-width: 499px) {
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }
`

const FormElements = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  max-width: 90%;

  @media all and (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }

  @media all and (max-width: 499px) {
    button {
      border-radius: 4px;
    }
  }
`

export default () => {
  const formRef = useRef(null)
  const emailRef = useRef(null)

  const handleSubmit = event => {
    event.preventDefault()

    if (!emailRef.current.value) {
      window.open('https://tinyletter.com/dormdev')
    } else {
      formRef.current.action = 'https://tinyletter.com/dormdev'
      formRef.current.method = 'post'
      formRef.current.target = '_blank'
      formRef.current.rel = 'noopener noreferrer'
      formRef.current.submit()
    }

    return true
  }

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit}>
      <FormElements>
        <EmailInput
          type="email"
          name="email"
          placeholder="Your Email"
          ref={emailRef}
        />
        <Button
          type="submit"
          value="Subscribe"
          fontSize="1rem"
          borderRadius="0 4px 4px 0"
        >
          Subscribe
        </Button>
      </FormElements>
    </StyledForm>
  )
}

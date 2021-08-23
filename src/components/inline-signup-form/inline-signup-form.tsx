import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useDefer, { Status } from 'use-defer'
import Button from '../button'

export type InlineSignupFormProps = {
  className?: ClassName
  onSignup: (email: string) => Promise<unknown>
}

const name = 'InlineSignupForm'

const Container = styled.div`
  max-width: 1020px;
  text-align: center;
  margin: 0 16px;
  padding: 52px 0 0;

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 88px 0 0;
  }
`

const Img = styled.img`
  max-width: 110px;
`

const Title = styled.h2`
  font: 700 40px/1 'Cormorant Garamond', serif;
  margin: 0 auto 18px;
  @media (min-width: 768px) {
    margin: 0 auto 22px;
  }
`

const Text = styled.p`
  font: 16px/1.3 'Montserrat', sans-serif;
  margin: 0 0 24px;
  @media (min-width: 768px) {
    margin: 0 0 28px;
  }
  white-space: break-spaces;
`

const Form = styled.form`
  max-width: 624px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Input = styled.input`
  height: 55px;
  padding: 10px 15px;
  font: 400 16px/1.3 'Montserrat', sans-serif;
  border: 0.5px solid #000000;
  background: #fff;
  border-radius: 0;
  box-sizing: border-box;
  text-align: center;
  @media (min-width: 768px) {
    width: 75%;
    border-right: 0;
    text-align: left;
  }
`

const FormButton = styled(Button)`
  overflow: visible;
  position: relative;
  border: 0.5px solid #000000;
  padding: 0;
  cursor: pointer;
  height: 55px;
  font: 700 16px/1 'Montserrat', sans-serif;
  color: #fff;
  text-transform: uppercase;
  background: #000000;
  border-radius: 0;
  letter-spacing: 0.08em;
  width: 100%;
  @media (min-width: 768px) {
    width: 25%;
  }
`

const SuccessMessage = styled.div`
  display: flex;
  justify-content: center;
  color: #4ca832;
  padding: 18px 0;
  font-size: 20px;
`

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px 0;
  font-size: 14px;
  color: #a83232;
`

export function InlineSignupForm({ className, onSignup }: InlineSignupFormProps): React.ReactElement {
  const [email, setEmail] = useState('')
  const signupRequest = useDefer<unknown, string>(onSignup, [onSignup])
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    signupRequest.execute(email)
  }

  return (
    <Container className={cn(name, className)}>
      <Img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/email-img.svg" alt="" />
      {signupRequest.status === Status.SUCCESS ? (
        <SuccessMessage>Congratulations! You have successfully signed up!</SuccessMessage>
      ) : (
        <>
          <Title>Thanks for signing up!</Title>
          <Text>Even our emails are fun. Sign up to receive special offers, games, prizes and more.</Text>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              required
              placeholder="Enter your email..."
              autoCorrect="off"
              disabled={signupRequest.status === Status.PENDING}
              autoCapitalize="off"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <FormButton disabled={signupRequest.status === Status.PENDING} type="submit">
              Submit
            </FormButton>
          </Form>
          {signupRequest.status === Status.ERROR && <ErrorMessage>{signupRequest.error}</ErrorMessage>}
        </>
      )}
    </Container>
  )
}
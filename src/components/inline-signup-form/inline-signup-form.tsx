import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useDefer, { Status } from 'use-defer'
import Button from '../../lib/button'
import Image from '../../lib/image'
import http from '../../modules/http'
import klaviyo from '../../lib/klaviyo'

const Container = styled.div`
  max-width: 1020px;
  text-align: center;
  margin: 0 15px;
  padding: 52px 0;

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 88px 0;
  }
`

const SImage = styled(Image)`
  max-width: 110px;
  margin: 0 auto;
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
  border-radius: 0;
  box-sizing: border-box;
  text-align: center;
  box-shadow: none;
  appearance: none;
  background: transparent;
  outline: none;
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

export type InlineSignupFormProps = {
  className?: ClassName
}

export function InlineSignupForm({ className }: InlineSignupFormProps): React.ReactElement {
  const [email, setEmail] = useState('')
  const signUpRequest = useDefer<unknown, string>(
    (email: string) =>
      http({
        url: `https://www.fragrantjewels.com/klsubscribe?email=${email}&l=PXeq2D&s=Footer-form`,
      }).then(() => {
        klaviyo('identify', { $email: email })
      }),
    []
  )
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    signUpRequest.execute(email)
  }

  return (
    <Container className={cn('InlineSignupForm', className)}>
      <SImage src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/email-img.svg" alt="" />
      {signUpRequest.status === Status.SUCCESS ? (
        <SuccessMessage>Congratulations! You have successfully signed up!</SuccessMessage>
      ) : (
        <>
          <Title>Surprises to your inbox</Title>
          <Text>Even our emails are fun. Sign up to receive special offers, games, prizes and more.</Text>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              required
              placeholder="Enter your email..."
              autoCorrect="off"
              disabled={signUpRequest.status === Status.PENDING}
              autoCapitalize="off"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <FormButton disabled={signUpRequest.status === Status.PENDING} type="submit">
              Submit
            </FormButton>
          </Form>
          {signUpRequest.status === Status.ERROR && <ErrorMessage>{signUpRequest.error}</ErrorMessage>}
        </>
      )}
    </Container>
  )
}

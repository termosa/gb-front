import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Button from '@gravity-brands/components.button'

export type InlineSignUpFormProps = {
  className?: ClassName
}

const name = 'InlineSignUpForm'

const Container = styled.div`
  max-width: 1020px;
  padding: 0 30px;
  text-align: center;
`

const Img = styled.img`
  max-width: 88px;
`

const Title = styled.h2`
  font: 700 32px/1 'Cormorant Garamond', serif;
  margin: 0 auto 15px;
`

const Text = styled.p`
  font: 12px/1.3 'Montserrat', sans-serif;
  margin-bottom: 15px;
`

const Form = styled.form`
  max-width: 624px;
  margin: 10px auto;
`

const Input = styled.input`
  height: 47px;
  padding: 10px 15px;
  font: 400 12px/1 'Montserrat', sans-serif;
  border: 0.5px solid #9059c8;
  border-right: 0;
  background: #fff;
  border-radius: 0;
  box-sizing: border-box;
`

const FormButton = styled(Button)`
  overflow: visible;
  position: relative;
  border: 0.5px solid #9059c8;
  padding: 0;
  cursor: pointer;
  height: 47px;
  font: 700 12px/1 'Montserrat', sans-serif;
  color: #fff;
  text-transform: uppercase;
  background: #9059c8;
  border-radius: 0;
  letter-spacing: 0.08em;
  width: 25%;
`

export function InlineSignUpForm({ className }: InlineSignUpFormProps): React.ReactElement {
  return (
    <Container className={cn(name, className)}>
      <Img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/surprise-box.png" alt="" />
      <Title>Thanks for signing up!</Title>
      <Text>Even our emails are fun. Sign up to receive special offers, games, prizes and more.</Text>
      <Form>
        <Input type="email" placeholder="Enter your email" autoCorrect="off" autoCapitalize="off" />
        <FormButton>Submit</FormButton>
      </Form>
    </Container>
  )
}

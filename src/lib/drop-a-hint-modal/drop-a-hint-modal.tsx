import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { Product } from '../../modules/normalize-product'
import submitHint from '../submit-hint'
import useDefer, { Status } from 'use-defer'
import Image from '../image'

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  font-size: 1rem;
  font: 400 1rem/1.3 Montserrat, sans-serif;
`

const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;

  @media (min-width: 992px) {
    margin: 1.75rem auto;
    max-width: 900px;
  }
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  outline: 0;
  padding: 15px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
`

const ModalBackdrop = styled.div`
  opacity: 0.8;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #fff;
`

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 2px;
  z-index: 1200;
  font-size: 34px;
  font-weight: 400;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.6;
  background: none;
  border: 0;
  cursor: pointer;

  &:after {
    content: '×';
    font: 200 42px/1 Montserrat, sans-serif;
  }
`

const ModalDahContent = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h4 {
    margin: 0;
    line-height: 1.3;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 22px;
    text-align: center;
  }

  img {
    max-width: 260px;
    margin: 0 auto 10px;
    display: block;
    max-height: 300px;
    width: auto;
    height: auto;

    @media (min-width: 768px) {
      max-width: 300px;
    }
  }
`

const ModalDahContentCol = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 767px) {
    &:first-child {
      order: 2;
    }
  }
`
const ModalDahPreview = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  max-width: 280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 auto;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 15px;
  }
`

const ModalDahPreviewField = styled.span<{ dirty?: boolean; md?: boolean }>`
  display: inline-block;
  border-bottom: ${(props) => (props.dirty ? 'none' : '1px solid #000')};
  padding-left: 2px;
  min-width: ${(props) => (props.dirty ? '0' : props.md ? '180px' : '50px')};

  @media (min-width: 768px) {
    min-width: ${(props) => (props.dirty ? '0' : props.md ? '130px' : '50px')};
  }
`

const MobileOnlyBlock = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`

const DesktopOnlyBlock = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const ModalErrorMessage = styled.div`
  color: red;
  margin-bottom: 32px;
`

const ModalBtn = styled.button`
  width: 150px;
  background: #fff;
  color: #9059c8;
  border: 1px solid #9059c8;
  padding: 11px 10px;
  margin: 0 auto 15px;
  display: block;
  transition: all linear 0.3s;
  cursor: pointer;

  &:hover {
    @media (min-width: 768px) {
      background: #9059c8;
      color: #fff;
    }
  }
`
const ModalLoader = styled.div`
  padding: 30px 0;
  text-align: center;
  font-size: 18px;
`

const ModalDahResultText = styled.div`
  text-align: center;
`
const ModalDahForm = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  display: block;
  padding: 10px 0;
`

const ModalDahFormItem = styled.div`
  margin-bottom: 35px;

  input {
    width: 100%;
    max-width: 100%;
    display: block;
    border: 0;
    border-bottom: 1px solid #000;
    border-radius: 0;
    padding: 0;
    margin: 0;
    font-size: 16px;

    &:focus {
      outline: 0;
      border: 0;
      border-bottom: 1px solid #000;
    }

    &::-webkit-input-placeholder {
      color: #7d7d7d;
    }
    &::-moz-placeholder {
      color: #7d7d7d;
    }
    &:-ms-input-placeholder {
      color: #7d7d7d;
    }
    &:-moz-placeholder {
      color: #7d7d7d;
    }
  }

  select {
    margin: 0;
    border: 0;
    border-bottom: 1px solid #000;
    border-radius: 0;
    padding: 0;
    font-size: 16px;
    color: #7d7d7d;
    appearance: none;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNy43cHgiIGhlaWdodD0iNC4zcHgiIHZpZXdCb3g9IjAgMCA3LjcgNC4zIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3LjcgNC4zIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiM5OTk5OTkiIGQ9Ik03LjEsMC4xQzYuNywwLjUsMy45LDMuMiwzLjksMy4yUzEsMC41LDAuNiwwLjFTMCwwLjcsMCwwLjdsMy45LDMuNmwzLjgtMy42QzcuNywwLjcsNy41LTAuMyw3LjEsMC4xeiIvPg0KPC9zdmc+DQo=);
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-color: #fff;
    padding-right: 28px;
    text-indent: 0.01px;
    width: 100%;

    &:active,
    &:focus {
      outline: 0;
      border: 0;
      border-bottom: 1px solid #000;
    }
  }
`

const ModalDahFormSelectWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  max-width: 350px;
  margin: 0 0 6px;
  justify-content: flex-start;
`

const ModalDahFormItemError = styled.div`
  display: none;
  color: red;
`

export type DropAHintModalProps = {
  className?: ClassName
  style?: React.CSSProperties
  product: Product
  onClose: () => void
}

const Result = ({ onClose }: { onClose: () => void }) => (
  <div>
    <ModalDahResultText>
      <h4>Your message has been sent!</h4>
    </ModalDahResultText>
    <ModalBtn type="button" onClick={onClose}>
      Close
    </ModalBtn>
  </div>
)

export function DropAHintModal({ className, style, product, onClose }: DropAHintModalProps): React.ReactElement {
  const [state, setState] = useState({
    sender: { name: '', email: '' },
    recipient: { name: '', email: '' },
    ringSize: '',
  })

  const submitHintRequest = useDefer(submitHint)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    submitHintRequest.execute(state.sender, state.recipient, product, state.ringSize)
  }

  return (
    <React.Fragment>
      <Modal>
        <ModalDialog>
          <ModalContent className={cn('DropAHintModal', className)} style={style}>
            <ModalCloseBtn type="button" onClick={onClose} />
            <ModalDahContent onSubmit={handleSubmit}>
              <ModalDahContentCol>
                <Image src={product.image?.src} alt={product.image?.alt} draggable={false} shopifySize={'large'} />
                <ModalDahPreview>
                  <p>
                    Hey{' '}
                    <ModalDahPreviewField dirty={!!state.recipient.name} md>
                      {state.recipient.name}
                    </ModalDahPreviewField>
                    {','}
                    <br /> Why don't you surprise{' '}
                    <ModalDahPreviewField dirty={!!state.sender.name} md>
                      {state.sender.name}
                    </ModalDahPreviewField>{' '}
                    with this? A little birdie told us they would really love it.
                  </p>
                  <p>
                    XOXO, <br />
                    Your FJ Fam <br />
                    P.S. Their ring size is{' '}
                    <ModalDahPreviewField dirty={!!state.ringSize}>{state.ringSize}</ModalDahPreviewField>
                    {'!'}
                  </p>
                </ModalDahPreview>
                <MobileOnlyBlock>
                  {submitHintRequest.status === Status.ERROR ? (
                    <ModalErrorMessage style={{ marginBottom: '25px' }}>
                      Oops. Something went wrong. Please try again later.
                    </ModalErrorMessage>
                  ) : null}
                  {submitHintRequest.status === Status.IDLE ? <ModalBtn type="submit">Send</ModalBtn> : null}
                  {/* This mobile ModalBtn should submit form onclick. Or you may use ModalDahContent as form (ModalDahForm) and type submit on this button */}
                  {submitHintRequest.status === Status.PENDING ? (
                    <ModalLoader style={{ marginBottom: '10px' }}>Loading...</ModalLoader>
                  ) : null}
                  {submitHintRequest.status === Status.SUCCESS ? <Result onClose={onClose} /> : null}
                </MobileOnlyBlock>
              </ModalDahContentCol>
              <ModalDahContentCol>
                {submitHintRequest.status !== Status.SUCCESS ? (
                  <ModalDahForm>
                    <h4>Drop a Hint</h4>
                    <div>
                      <ModalDahFormItem>
                        <input
                          type="text"
                          placeholder="Recipient's Name"
                          value={state.recipient.name}
                          onChange={(e) =>
                            setState((s) => ({ ...s, recipient: { ...s.recipient, name: e.target.value } }))
                          }
                          required
                        />
                        <ModalDahFormItemError />
                      </ModalDahFormItem>
                      <ModalDahFormItem>
                        <input
                          type="email"
                          placeholder="Recipient's Email"
                          value={state.recipient.email}
                          onChange={(e) =>
                            setState((s) => ({ ...s, recipient: { ...s.recipient, email: e.target.value } }))
                          }
                          required
                        />
                        <ModalDahFormItemError />
                      </ModalDahFormItem>
                      <ModalDahFormItem>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={state.sender.name}
                          onChange={(e) => setState((s) => ({ ...s, sender: { ...s.sender, name: e.target.value } }))}
                          required
                        />
                        <ModalDahFormItemError />
                      </ModalDahFormItem>
                      <ModalDahFormItem>
                        <ModalDahFormSelectWrapper>
                          <select
                            value={state.ringSize}
                            onChange={(e) => setState((s) => ({ ...s, ringSize: e.target.value }))}
                            required
                          >
                            <option value="" disabled>
                              Your Ring Size
                            </option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </ModalDahFormSelectWrapper>
                        <ModalDahFormItemError />
                      </ModalDahFormItem>
                      <ModalDahFormItem>
                        <input
                          type="email"
                          placeholder="Your Email"
                          value={state.sender.email}
                          onChange={(e) => setState((s) => ({ ...s, sender: { ...s.sender, email: e.target.value } }))}
                          required
                        />
                        <ModalDahFormItemError />
                      </ModalDahFormItem>
                    </div>
                    <DesktopOnlyBlock style={{ marginBottom: '15px' }}>
                      {submitHintRequest.status === Status.ERROR ? (
                        <ModalErrorMessage>Oops. Something went wrong. Please try again later.</ModalErrorMessage>
                      ) : null}
                      <ModalBtn type="submit">Send</ModalBtn>
                    </DesktopOnlyBlock>
                  </ModalDahForm>
                ) : null}
                <DesktopOnlyBlock>
                  {submitHintRequest.status === Status.PENDING ? <ModalLoader>Loading...</ModalLoader> : null}
                  {submitHintRequest.status === Status.SUCCESS ? <Result onClose={onClose} /> : null}
                </DesktopOnlyBlock>
              </ModalDahContentCol>
            </ModalDahContent>
          </ModalContent>
        </ModalDialog>
      </Modal>
      <ModalBackdrop />
    </React.Fragment>
  )
}

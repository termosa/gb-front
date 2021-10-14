import React, { useState } from 'react'
import { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import trackAddedToCart from 'src/lib/track-added-to-cart'
import { Product, ProductVariant } from '../../modules/normalize-product'
import useDefer, { Status } from 'use-defer'
import useCart from '../use-cart'

const Modal = styled.div<{
  visible?: boolean
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  // z-index: 100;
  z-index: 34;
  display: flex;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  align-items: flex-end;
  justify-content: center;
  transition: opacity linear 0.2s;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  pointer-events: ${(props) => (props.visible ? 'all' : 'none')};
  font: 400 16px/1.2 'Montserrat', sans-serif;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1200px) {
    position: absolute;
    align-items: flex-end;
  }
`

const ModalContent = styled.div<{ visible?: boolean }>`
  padding: 40px 16px 12px;
  background: white;
  border-radius: 0;
  // min-width: 250px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  transition: all ease-out 0.3s;
  transform: translateY(${(props) => (props.visible ? '0' : '100%')});
  margin: 0;
  width: 100%;
  position: relative;
  cursor: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    padding: 40px 12px 12px;
    transform: scale(${(props) => (props.visible ? '1' : '0.85')});
    max-width: 332px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 1200px) {
    transform: translateY(${(props) => (props.visible ? '0' : '100%')});
    max-width: 100%;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);
  }
`

const ModalContentBody = styled.div`
  margin: 0 auto;
  max-width: 350px;

  @media (min-width: 1200px) {
    max-width: 100%;
  }
`

const ModalCloseButton = styled.button`
  position: absolute;
  line-height: 1;
  font-size: 28px;
  box-sizing: border-box;
  border-radius: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  opacity: 1;
  transition: opacity linear 0.2s;
  right: 10px;
  top: 10px;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`

const ProductModalHeading = styled.h3`
  font-size: 16px;
  text-align: center;
  margin: 0 auto 10px;
  font-weight: 400;
  letter-spacing: 0;
  max-width: 230px;
  line-height: 1.3;
`

const ProductSelector = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0 0 14px;
`

const ProductRsSelector = styled.div`
  text-align: center;
  color: #9059c8;
  margin: 0 0 16px;
  letter-spacing: 0;
`

const ProductSelectorBtnHolder = styled.div`
  margin: 0 2px;
  position: relative;
  width: 100%;
  max-width: 50px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const ProductSelectorBtn = styled.button<{
  isActive: boolean
}>`
  background: ${(props) => (props.isActive ? '#9059C8' : '#fff')};
  border: ${(props) => (props.isActive ? '1px solid #9059C8' : '1px solid #000')};
  padding: 10px 5px;
  font-size: 15px;
  // min-width: 35px;
  margin: 0;
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  transition: all linear 0.3s;
  outline: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    @media (min-width: 1200px) {
      color: #fff;
      background: #9059c8;
      border-color: #9059c8;
    }
  }

  &:disabled {
    color: #dadada;
    border: 1px solid #dadada;
    pointer-events: none;
  }
`

const ProductBtn = styled.button<{ disabled?: boolean; preorder?: boolean }>`
  background: #fff;
  color: ${(props) => (props.preorder ? '#9059c8' : '#000')};
  padding: 17px 15px;
  width: 100%;
  border: 1px solid #000;
  border-color: ${(props) => (props.preorder ? '#9059c8' : '#000')};
  margin: 0 0 30px;
  text-transform: uppercase;
  appearance: none;
  font-weight: 400;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all linear 0.2s;
  font: 400 14px/1 'Montserrat', sans-serif;

  @media (min-width: 768px) {
    margin: 0;
  }

  @media (min-width: 1200px) {
    margin: 0;

    &:not([disabled]):hover {
      background-color: ${(props) => (props.preorder ? '#9059c8' : '#000')};
      color: #fff;
    }
  }

  &[disabled] {
    cursor: auto;
    border-color: #ddd;
    background: #ddd;
  }
`

const ModalForm = styled.form``

export type AddProductToCartFormProps = {
  className?: ClassName
  style?: React.CSSProperties
  visible: boolean
  onClose: () => void
  product: Product
}

export function AddProductToCartForm({ visible, onClose, product }: AddProductToCartFormProps): React.ReactElement {
  const cart = useCart(true)
  const addCartItemRequest = useDefer(cart.addItem, [cart.addItem])
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  // const [isSelectRingError, setSelectRingError] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  // const [addToCartButtonState, setAddToCartButtonState] = useState<string>('Add to Cart')

  const onCloseModal = (event: any) => {
    event.stopPropagation()
    onClose()
  }

  const successRequest = (product: Product) => {
    // setAddToCartButtonState('Added!')
    setTimeout(() => {
      addCartItemRequest.reset()
    }, 1000)
    trackAddedToCart(product)
  }

  const failRequest = (err: string) => {
    // setAddToCartButtonState('Add to Cart')
    setError(err.toString())
  }

  const addToCartHandler = (selectedVariant: ProductVariant | null, product: Product) => {
    if (!selectedVariant) {
      setError('Please select ring size')
      return
    }

    addCartItemRequest
      .execute(selectedVariant.variant_id)
      .then(() => successRequest(product))
      .catch((err) => failRequest(err))

    // const addingRequest: Promise<unknown> = addCartItem(selectedVariant.variant_id)
    // setAddToCartButtonState('Adding...')
    // addingRequest.then(() => successRequest(product)).catch((err) => failRequest(err))
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    addToCartHandler(selectedVariant, product)
  }

  return (
    <Modal onClick={(e) => onCloseModal(e)} visible={visible}>
      <ModalContent onClick={(e) => e.stopPropagation()} visible={visible}>
        <ModalContentBody>
          <ModalCloseButton onClick={() => onClose()} type="button">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 1.09381L1 21.0938M1 1.09381L21 21.0938"
                stroke="black"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ModalCloseButton>
          <ModalForm onSubmit={handleSubmit}>
            <ProductModalHeading>
              Select a {product.variants && product.variants.length > 1 ? 'ring size' : 'jewelry type'} to add this item
              to your cart:
            </ProductModalHeading>
            <ProductSelector>
              {product.variants.map(
                (variant: ProductVariant) =>
                  variant.size && (
                    <ProductSelectorBtnHolder key={variant.size}>
                      <ProductSelectorBtn
                        isActive={variant.variant_id === selectedVariant?.variant_id}
                        type="button"
                        value={variant.size}
                        onClick={() => {
                          setError(null)
                          setSelectedVariant(variant)
                        }}
                        disabled={!variant.available}
                      >
                        {variant.title}
                      </ProductSelectorBtn>
                    </ProductSelectorBtnHolder>
                  )
              )}
            </ProductSelector>
            {error && <ProductRsSelector>{error}</ProductRsSelector>}
            <ProductBtn type="submit" preorder={product.preOrder}>
              {[Status.IDLE, Status.ERROR].includes(addCartItemRequest.status) &&
                (product.preOrder ? 'Pre-order' : 'Add to cart')}
              {addCartItemRequest.status === Status.PENDING && 'Adding...'}
              {addCartItemRequest.status === Status.SUCCESS && 'Added!'}
            </ProductBtn>
          </ModalForm>
        </ModalContentBody>
      </ModalContent>
    </Modal>
  )
}

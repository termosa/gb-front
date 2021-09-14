import { waitFor } from '@testing-library/react'
import addCartItemWithSubscription from '.'
import changeCartItem from '../change-cart-item'
import loadCart from '../load-cart'
import addCartItems from '../add-cart-items'
jest.mock('../change-cart-item')
jest.mock('../load-cart')
jest.mock('../add-cart-items')

describe('addCartItemWithSubscription()', () => {
  beforeEach(() => {
    ;(addCartItems as jest.Mock).mockReset()
    ;(addCartItems as jest.Mock).mockResolvedValue([
      {
        productId: 12345,
        quantity: 2,
        title: 'Red Rain Coat - Small',
        key: '12345:03af7a8cb59a4c3c45595c76fa8cb53c',
        properties: {
          discount: 0.2,
          shipping_discount: 1,
          create_bt_subscription: true,
          subscription_product_id: 39299558965326,
        },
        variantId: 12345,
      },
      {
        /// subscription item
        variantId: 39299558965326,
        title: 'Fire dragon',
        key: '39299558965326:03af7a8cb59a4c3c45595c76fa8cb53c',
        properties: {},
        productId: 39299558965326,
      },
    ])
    ;(loadCart as jest.Mock).mockReset()
    ;(loadCart as jest.Mock).mockResolvedValue({
      items: [
        {
          productId: 794864229,
          quantity: 1,
          title: 'Red Rain Coat - Small',
          key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
          properties: {},
          variantId: 794864229,
        },
        {
          productId: 794864101,
          quantity: 2,
          title: 'Gray Fedora',
          key: '794864101:816a55d9a53cd82281f8fdcfe967db14',
          properties: {},
          variantId: 794864101,
        },
      ],
    })
  })

  it('should call the loadCart', () => {
    addCartItemWithSubscription(12345, 5, 2)
    expect(loadCart).toBeCalledTimes(1)
  })

  it(`should add a new product with discount and subscription if they don't exists`, () => {
    expect(addCartItemWithSubscription(12345, 5, 2)).resolves.toStrictEqual({
      item: {
        productId: 12345,
        quantity: 2,
        title: 'Red Rain Coat - Small',
        key: '12345:03af7a8cb59a4c3c45595c76fa8cb53c',
        properties: {
          discount: 0.2,
          shipping_discount: 1,
          create_bt_subscription: true,
          subscription_product_id: 39299558965326,
        },
        variantId: 12345,
      },
      subscriptionItem: {
        variantId: 39299558965326,
        key: '39299558965326:03af7a8cb59a4c3c45595c76fa8cb53c',
        productId: 39299558965326,
        properties: {},
        title: 'Fire dragon',
      },
    })

    waitFor(() =>
      expect(addCartItems).toBeCalledWith([
        {
          variantId: 12345,
          quantity: 2,
          properties: {
            discount: 0.2,
            shipping_discount: 1,
            create_bt_subscription: true,
            subscription_product_id: 39299558965326,
          },
        },
        { variantId: 39299558965326 },
      ])
    )
  })

  it(`should call addCartItems without subscription item if exist`, () => {
    ;(loadCart as jest.Mock).mockReset()
    ;(loadCart as jest.Mock).mockResolvedValue({
      items: [
        {
          productId: 794864229,
          quantity: 1,
          title: 'Red Rain Coat - Small',
          key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
          properties: {},
          variantId: 794864229,
        },
        {
          // subscription product is already exists
          variantId: 39299558965326,
          title: 'Fire dragon',
          key: '39299558965326:03af7a8cb59a4c3c45595c76fa8cb53c',
          properties: {},
          productId: 39299558965326,
        },
      ],
    })
    expect(addCartItemWithSubscription(12345, 5, 2))
    waitFor(() =>
      expect(addCartItems).toBeCalledWith([
        {
          variantId: 12345,
          quantity: 2,
          properties: {
            discount: 0.2,
            shipping_discount: 1,
            create_bt_subscription: true,
            subscription_product_id: 39299558965326,
          },
        },
        // without { variantId: 39299558965326 } because subscription is already exists
      ])
    )
  })

  it('should update item quantity and return existing subscription', () => {
    ;(loadCart as jest.Mock).mockReset()
    ;(loadCart as jest.Mock).mockResolvedValue({
      items: [
        {
          productId: 794864229,
          quantity: 1,
          title: 'Red Rain Coat - Small',
          key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
          properties: {},
          variantId: 794864229,
        },
        {
          // subscription product is already exists
          variantId: 39299558965326,
          title: 'Fire dragon',
          key: '39299558965326:03af7a8cb59a4c3c45595c76fa8cb53c',
          properties: {},
          productId: 39299558965326,
        },
      ],
    })
    ;(changeCartItem as jest.Mock).mockReset()
    ;(changeCartItem as jest.Mock).mockResolvedValue({
      items: [
        {
          key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
          productId: 794864229,
          variantId: 794864229,
          quantity: 2,
          title: 'Red Rain Coat - Small',
          properties: {
            discount: 0.2,
            shipping_discount: 1,
            create_bt_subscription: true,
            subscription_product_id: 39299558965326,
          },
        },
      ],
    })

    expect(addCartItemWithSubscription(794864229, 5, 2)).resolves.toStrictEqual({
      item: {
        key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
        productId: 794864229,
        variantId: 794864229,
        quantity: 2,
        title: 'Red Rain Coat - Small',
        properties: {
          discount: 0.2,
          shipping_discount: 1,
          create_bt_subscription: true,
          subscription_product_id: 39299558965326,
        },
      },
      subscriptionItem: {
        variantId: 39299558965326,
        title: 'Fire dragon',
        key: '39299558965326:03af7a8cb59a4c3c45595c76fa8cb53c',
        properties: {},
        productId: 39299558965326,
      },
    })

    waitFor(() =>
      expect(changeCartItem).toBeCalledWith(
        '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
        {
          discount: 0.2,
          shipping_discount: 1,
          create_bt_subscription: true,
          subscription_product_id: 39299558965326,
        },
        2
      )
    )
  })

  it('should update item quantity and add the subscription', () => {
    ;(addCartItems as jest.Mock).mockReset()
    ;(addCartItems as jest.Mock).mockResolvedValue([
      {
        /// subscription item
        variantId: 39299558965326,
        title: 'Fire dragon',
        key: '39299558965326:03af7a8cb59a4c3c45595c76fa8cb53c',
        properties: {},
        productId: 39299558965326,
      },
    ])
    ;(changeCartItem as jest.Mock).mockReset()
    ;(changeCartItem as jest.Mock).mockResolvedValue({
      items: [
        {
          key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
          productId: 794864229,
          variantId: 794864229,
          quantity: 2,
          title: 'Red Rain Coat - Small',
          properties: {
            discount: 0.2,
            shipping_discount: 1,
            create_bt_subscription: true,
            subscription_product_id: 39299558965326,
          },
        },
      ],
    })

    expect(addCartItemWithSubscription(794864229, 5, 2)).resolves.toStrictEqual({
      item: {
        key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
        productId: 794864229,
        variantId: 794864229,
        quantity: 2,
        title: 'Red Rain Coat - Small',
        properties: {
          discount: 0.2,
          shipping_discount: 1,
          create_bt_subscription: true,
          subscription_product_id: 39299558965326,
        },
      },
      subscriptionItem: {
        variantId: 39299558965326,
        title: 'Fire dragon',
        key: '39299558965326:03af7a8cb59a4c3c45595c76fa8cb53c',
        properties: {},
        productId: 39299558965326,
      },
    })

    waitFor(() =>
      expect(changeCartItem).toBeCalledWith(
        '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
        {
          discount: 0.2,
          shipping_discount: 1,
          create_bt_subscription: true,
          subscription_product_id: 39299558965326,
        },
        2
      )
    )

    waitFor(() => expect(addCartItems).toBeCalledWith([{ variantId: 3929955896905326 }]))
  })
})

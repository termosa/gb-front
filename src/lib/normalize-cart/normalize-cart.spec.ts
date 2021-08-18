import normalizeCart from '.'
import normalizeCartItem, { ServerCartItem } from '../normalize-cart-item'
jest.mock('../normalize-cart-item')

describe('normalizeCart()', () => {
  it('normalizes a server cart data', () => {
    let counter = 0
    ;(normalizeCartItem as jest.Mock).mockImplementation(() => ++counter)

    expect(
      normalizeCart({
        token: 'f8d0aefa95fdbd9e6cbef63dcad1475c',
        note: null,
        attributes: {},
        original_total_price: 1695,
        total_price: 1695,
        total_discount: 0,
        total_weight: 1361.0039,
        item_count: 2,
        items: [{ id: 1 } as ServerCartItem, { id: 2 } as ServerCartItem],
        requires_shipping: true,
        currency: 'USD',
        items_subtotal_price: 1695,
        cart_level_discount_applications: [],
      })
    ).toStrictEqual({
      items: [1, 2],
      token: 'f8d0aefa95fdbd9e6cbef63dcad1475c',
      totalPrice: 16.95,
      itemCount: 2,
    })
  })
})

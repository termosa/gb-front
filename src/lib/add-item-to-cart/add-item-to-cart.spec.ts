import addItemToCart from '.'
import shopifyApi from '../shopify-api'
jest.mock('../shopify-api')

describe('addItemToCart()', () => {
  beforeEach(() => {
    (shopifyApi as jest.Mock).mockReset()
    ;(shopifyApi as jest.Mock).mockResolvedValue(null)
  })

  it('should call Shopify API with default params', () => {
    addItemToCart(42)
    expect(shopifyApi).toBeCalledWith({
      path: '/cart/add.js',
      method: 'POST',
      body: {
        items: [{ id: 42, quantity: 1 }],
      },
    })
  })

  it('should call Shopify API with given quantity', () => {
    addItemToCart(42, 3)
    expect(shopifyApi).toBeCalledWith({
      path: '/cart/add.js',
      method: 'POST',
      body: {
        items: [{ id: 42, quantity: 3 }],
      },
    })
  })
})

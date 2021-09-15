import trackViewedProduct from '.'
import klaviyo from '../klaviyo'
import { Product } from '../../modules/normalize-product'
jest.mock('../klaviyo')

describe('trackViewedProduct()', () => {
  beforeEach(() => {
    ;(klaviyo as jest.Mock).mockReset()
  })

  it('should call to klaviyo', () => {
    const product_id = 123
    const title = 'Bath Bomb'
    const handle = 'bath-bomb'
    const actual_price = 14.99
    const compare_at_price = 13
    const vendor = 'FJ'

    trackViewedProduct({ product_id, title, handle, vendor, variants: [{ actual_price, compare_at_price }] } as Product)

    expect(klaviyo).toBeCalledWith('track', 'Viewed Product', {
      Name: title,
      ProductID: product_id,
      URL: `http://localhost/products/${handle}`,
      Price: '$14.99',
      CompareAtPrice: '$13.00',
      Brand: vendor,
    })

    expect(klaviyo).toBeCalledWith('trackViewedItem', {
      Title: title,
      ItemId: product_id,
      Url: `http://localhost/products/${handle}`,
      Metadata: {
        Price: '$14.99',
        CompareAtPrice: '$13.00',
        Brand: vendor,
      },
    })
  })
})

import { waitFor } from '@testing-library/dom'
import loadMembershipProductForSubscriptionProduct from '.'
import loadProduct from '../load-product'
import api from '../../modules/api'
jest.mock('../load-product')
jest.mock('../../modules/api')

describe('loadMembershipProductForSubscriptionProduct()', () => {
  beforeEach(() => {
    ;(api as jest.Mock).mockReset()
    ;(api as jest.Mock).mockResolvedValue([
      {
        membership_product: {
          id: '6632667971662',
        },
      },
    ])
    ;(loadProduct as jest.Mock).mockReset()
    ;(loadProduct as jest.Mock).mockResolvedValue({
      type: 'membership',
    })
  })

  it('should call the api with given parameters', () => {
    loadMembershipProductForSubscriptionProduct(12345)
    expect(api).toBeCalledWith({
      base: 'https://fjrecurly.herokuapp.com',
      path: '/shopify_endpoint/list_products',
      query: { products: 12345 },
    })
  })

  it('should call the loadProduct with membershipProductId', () => {
    loadMembershipProductForSubscriptionProduct(12345)
    waitFor(() => expect(loadProduct).toBeCalledWith('6632667971662'))
  })

  it('should return membership product', () => {
    expect(loadMembershipProductForSubscriptionProduct(12345)).resolves.toStrictEqual({
      type: 'membership',
    })
  })
})

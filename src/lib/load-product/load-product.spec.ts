import loadProduct from '.'
import api from '../../modules/api'
import normalizeProduct from '../../modules/normalize-product'
import { waitFor } from '@testing-library/react'
jest.mock('../../modules/api')
jest.mock('../../modules/normalize-product')

describe('loadProduct()', () => {
  beforeEach(() => {
    ;(api as jest.Mock).mockReset()
    ;(api as jest.Mock).mockResolvedValue({ product: 123 })
    ;(normalizeProduct as jest.Mock).mockReset()
    ;(normalizeProduct as jest.Mock).mockResolvedValue({ productId: 123 })
  })

  it('should call proper endpoint and normalize its response', () => {
    expect(loadProduct(123)).resolves.toEqual({ productId: 123 })
    expect(api).toBeCalledWith({ path: '/inventory/products/123' })
    waitFor(() => expect(normalizeProduct).toBeCalledWith({ product: 123 }))
  })
})

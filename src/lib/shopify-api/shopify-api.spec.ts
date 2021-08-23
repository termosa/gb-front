import shopifyApi from '.'
import http from '../../modules/http'
import { waitFor } from '@testing-library/react'

jest.mock('../../modules/http')
jest.mock('../../modules/base-site-url', () => 'http://site.com')

describe('shopifyApi()', () => {
  beforeEach(() => {
    ;(http as jest.Mock).mockReset()
    ;(http as jest.Mock).mockResolvedValue({ apiResponse: true })
  })

  it('should call http service', () => {
    shopifyApi({ path: '/cart.js' })
    waitFor(() => expect(http).toBeCalledWith({ method: 'GET', url: 'http://site.com/cart.js' }))
  })
})

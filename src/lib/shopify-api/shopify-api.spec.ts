import shopifyApi from '.'
import http from '../../modules/http'
import baseSiteUrl from '../../modules/base-site-url'
jest.mock('../../modules/http')
jest.mock('../../modules/base-site-url')

describe('shopifyApi()', () => {
  beforeEach(() => {
    ;(http as jest.Mock).mockReset()
    ;(http as jest.Mock).mockResolvedValue({ apiResponse: true })
    ;(baseSiteUrl as jest.Mock).mockReset()
    ;(baseSiteUrl as jest.Mock).mockReturnValue('http://site.com')
  })

  it('should call http service', () => {
    shopifyApi({ path: '/cart.js' })
    expect(http).toBeCalledWith({ method: 'GET', url: 'http://site.com/cart.js' })
  })
})

import setCookies from '../../lib/set-cookie'
import deleteCookie from '../../lib/delete-cookie'
import getCookie from '.'

describe('setCookies()', () => {
  beforeEach(() => {
    deleteCookie('promo_variant')
  })

  it('should get cookie', () => {
    setCookies('promo_variant', 39448392761422, 1)
    const promoVariant = getCookie('promo_variant')
    expect(Number(promoVariant)).toBe(39448392761422)
  })
})

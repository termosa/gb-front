import setCookie from '../../lib/set-cookie'
import getCookie from '../../lib/get-cookie'
import deleteCookie from '.'

describe('setCookie()', () => {
  beforeEach(() => {
    deleteCookie('promo_variant')
  })

  it('should get cookie', () => {
    setCookie('promo_variant', 39448392761422, 1)
    const promoVariant = getCookie('promo_variant')
    expect(Number(promoVariant)).toBe(39448392761422)
  })

  it('should get cookie', () => {
    const promoVariant = getCookie('promo_variant')
    expect(promoVariant).toBeFalsy()
  })
})

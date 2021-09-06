import setCookie from '../../lib/set-cookie'
import getCookie from '../../lib/get-cookie'
import deleteCookie from '.'

describe('deleteCookie()', () => {
  beforeEach(() => {
    deleteCookie('promo_variant')
  })

  it('should set cookie', () => {
    setCookie('promo_variant', 39448392761422, 1)
    const promoVariant = getCookie('promo_variant')
    expect(Number(promoVariant)).toBe(39448392761422)
  })

  it('should check for invalid cookies after delete cookie', () => {
    const promoVariant = getCookie('promo_variant')
    expect(promoVariant).toBeFalsy()
  })
})

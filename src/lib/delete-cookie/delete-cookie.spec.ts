import deleteCookie from '.'

jest.mock('../log')

describe('deleteCookie()', () => {
  it('should return greeting', () => {
    expect(deleteCookie('World')).toBe('Hello World!')
  })
})

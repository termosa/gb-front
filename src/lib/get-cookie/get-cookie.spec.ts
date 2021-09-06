import getCookies from '.'
import log from '../log'
jest.mock('../log')

describe('getCookie()', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should print greeting to the console', () => {
    getCookies('World')
    expect(log).toBeCalledWith('Hello World!')
  })

  it('should print default greeting to the console', () => {
    getCookies()
    expect(log).toBeCalledWith('Hello there!')
  })

  it('should return greeting', () => {
    expect(getCookies('World')).toBe('Hello World!')
  })

  it('should return default greeting', () => {
    expect(getCookies()).toBe('Hello there!')
  })
})

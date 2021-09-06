import setCookies from '.'
import log from '../log'
jest.mock('../log')

describe('setCookies()', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should print greeting to the console', () => {
    setCookies('World')
    expect(log).toBeCalledWith('Hello World!')
  })

  it('should print default greeting to the console', () => {
    setCookies()
    expect(log).toBeCalledWith('Hello there!')
  })

  it('should return greeting', () => {
    expect(setCookies('World')).toBe('Hello World!')
  })

  it('should return default greeting', () => {
    expect(setCookies()).toBe('Hello there!')
  })
})

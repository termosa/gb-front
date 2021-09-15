import loadDiscount from '.'
import log from '../log'
jest.mock('../log')

describe('loadDiscount()', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should print greeting to the console', () => {
    loadDiscount('World')
    expect(log).toBeCalledWith('Hello World!')
  })

  it('should print default greeting to the console', () => {
    loadDiscount()
    expect(log).toBeCalledWith('Hello there!')
  })

  it('should return greeting', () => {
    expect(loadDiscount('World')).toBe('Hello World!')
  })

  it('should return default greeting', () => {
    expect(loadDiscount()).toBe('Hello there!')
  })
})

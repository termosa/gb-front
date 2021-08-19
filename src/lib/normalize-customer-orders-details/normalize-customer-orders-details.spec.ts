import normalizeCustomerOrdersDetails from '.'
import log from '../log'
jest.mock('../log')

describe('normalizeCustomerOrdersDetails()', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should print greeting to the console', () => {
    normalizeCustomerOrdersDetails('World')
    expect(log).toBeCalledWith('Hello World!')
  })

  it('should print default greeting to the console', () => {
    normalizeCustomerOrdersDetails()
    expect(log).toBeCalledWith('Hello there!')
  })

  it('should return greeting', () => {
    expect(normalizeCustomerOrdersDetails('World')).toBe('Hello World!')
  })

  it('should return default greeting', () => {
    expect(normalizeCustomerOrdersDetails()).toBe('Hello there!')
  })
})

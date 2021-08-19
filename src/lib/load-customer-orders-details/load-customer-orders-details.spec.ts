import loadCustomerOrdersDetails from '.'
import log from '../log'
jest.mock('../log')

describe('loadCustomerOrdersDetails()', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should print greeting to the console', () => {
    loadCustomerOrdersDetails('World')
    expect(log).toBeCalledWith('Hello World!')
  })

  it('should print default greeting to the console', () => {
    loadCustomerOrdersDetails()
    expect(log).toBeCalledWith('Hello there!')
  })

  it('should return greeting', () => {
    expect(loadCustomerOrdersDetails('World')).toBe('Hello World!')
  })

  it('should return default greeting', () => {
    expect(loadCustomerOrdersDetails()).toBe('Hello there!')
  })
})

import createFormData from '.'
import log from '../log'
jest.mock('../log')

describe('createFormData()', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should print greeting to the console', () => {
    createFormData('World')
    expect(log).toBeCalledWith('Hello World!')
  })

  it('should print default greeting to the console', () => {
    createFormData()
    expect(log).toBeCalledWith('Hello there!')
  })

  it('should return greeting', () => {
    expect(createFormData('World')).toBe('Hello World!')
  })

  it('should return default greeting', () => {
    expect(createFormData()).toBe('Hello there!')
  })
})

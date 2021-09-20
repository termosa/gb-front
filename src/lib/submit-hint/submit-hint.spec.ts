import submitHint from '.'
import log from '../log'
jest.mock('../log')

describe('submitHint()', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should print greeting to the console', () => {
    submitHint('World')
    expect(log).toBeCalledWith('Hello World!')
  })

  it('should print default greeting to the console', () => {
    submitHint()
    expect(log).toBeCalledWith('Hello there!')
  })

  it('should return greeting', () => {
    expect(submitHint('World')).toBe('Hello World!')
  })

  it('should return default greeting', () => {
    expect(submitHint()).toBe('Hello there!')
  })
})

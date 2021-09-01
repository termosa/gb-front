import loadPromo from '.'
import log from '../log'
jest.mock('../log')

describe('loadPromo()', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should print greeting to the console', () => {
    loadPromo('World')
    expect(log).toBeCalledWith('Hello World!')
  })

  it('should print default greeting to the console', () => {
    loadPromo()
    expect(log).toBeCalledWith('Hello there!')
  })

  it('should return greeting', () => {
    expect(loadPromo('World')).toBe('Hello World!')
  })

  it('should return default greeting', () => {
    expect(loadPromo()).toBe('Hello there!')
  })
})

import createGlobalStateHook from '.'
import log from '../log'
jest.mock('../log')

describe('createGlobalStateHook()', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should print greeting to the console', () => {
    createGlobalStateHook('World')
    expect(log).toBeCalledWith('Hello World!')
  })

  it('should print default greeting to the console', () => {
    createGlobalStateHook()
    expect(log).toBeCalledWith('Hello there!')
  })

  it('should return greeting', () => {
    expect(createGlobalStateHook('World')).toBe('Hello World!')
  })

  it('should return default greeting', () => {
    expect(createGlobalStateHook()).toBe('Hello there!')
  })
})

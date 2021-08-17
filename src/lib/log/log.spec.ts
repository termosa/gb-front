import log from '.'
import mockdate from 'mockdate'

describe('log()', () => {
  const originalConsoleLog = console.log

  beforeEach(() => {
    console.log = jest.fn()
  })

  afterEach(() => {
    console.log = originalConsoleLog
  })

  it('should print log', () => {
    log('execute')
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log).toBeCalledWith('execute')
  })

  it('should print log with several values of different types', () => {
    const object = {}
    const array = []
    log('execute', 1, null, object, array)
    expect(console.log).toBeCalledWith('execute', 1, null, object, array)
  })

  describe('.enable() / .disable()', () => {
    afterEach(() => log.enable())

    it('should mute calls to the console', () => {
      log.disable()
      log('execute')
      expect(console.log).not.toBeCalled()
    })

    it('should unmute calls to the console', () => {
      log.disable()
      log.enable()
      log('execute')
      expect(console.log).toBeCalledWith('execute')
    })
  })

  describe('.enableDetails() / .disableDetails()', () => {
    afterEach(() => log.disableDetails())

    beforeEach(() => mockdate.set(1628884560882))

    afterEach(() => mockdate.reset())

    it('should print time with given output', () => {
      log.enableDetails()
      log('execute')
      expect(console.log).toBeCalledWith(' >>> 2021-08-13T19:56:00.882Z\n', 'execute')
    })

    it('should hide time', () => {
      log.enableDetails()
      log.disableDetails()
      log('execute')
      expect(console.log).not.toBeCalledWith(' >>> 2021-08-13T19:56:00.882Z\n', 'execute')
    })
  })
})

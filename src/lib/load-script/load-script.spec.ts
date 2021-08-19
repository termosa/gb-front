import loadScript from '.'
import tinyScriptLoader from 'tiny-script-loader/loadScriptPromised'
jest.mock('tiny-script-loader/loadScriptPromised')

describe('loadScript()', () => {
  beforeEach(() => {
    ;(tinyScriptLoader as jest.Mock).mockReset()
  })

  it('should print greeting to the console', () => {
    ;(tinyScriptLoader as jest.Mock).mockResolvedValueOnce('usually it is voided, but not for testing')
    expect(loadScript('script/path.js')).resolves.toBe('usually it is voided, but not for testing')
    expect(tinyScriptLoader).toBeCalledWith('script/path.js')
  })

  it('should only load scripts once', () => {
    ;(tinyScriptLoader as jest.Mock).mockResolvedValueOnce(1)
    expect(loadScript('new/script/path.js')).resolves.toBe(1)
    ;(tinyScriptLoader as jest.Mock).mockResolvedValueOnce(2)
    expect(loadScript('different/script/path.js')).resolves.toBe(2)
    ;(tinyScriptLoader as jest.Mock).mockResolvedValue(0)
    expect(loadScript('new/script/path.js')).resolves.toBe(1)
    expect(loadScript('different/script/path.js')).resolves.toBe(2)
    expect(tinyScriptLoader).toBeCalledTimes(2)
  })
})

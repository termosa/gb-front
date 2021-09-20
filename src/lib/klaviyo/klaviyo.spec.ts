// TOOD: Release is in few days
import klaviyo from '.'
import { KLAVIYO_ACCOUNT } from '../initiate-klaviyo'
import log from '../log'
import window from '../window'
import loadScript from '../load-script'
import loadCustomer from '../../modules/load-customer'
jest.mock('../window', () => ({}))
jest.mock('../load-script', () => jest.fn())
jest.mock('../../modules/load-customer', () => jest.fn())

describe('klaviyo()', () => {
  const customerEmail = 'test@mail.com'

  afterAll(() => Object.keys(window).forEach((key) => delete window[key]))

  beforeAll(() => {
    Object.assign(window, { _learnq: { push: jest.fn() } })
    ;(loadScript as jest.Mock).mockResolvedValueOnce(null)
    ;(loadCustomer as jest.Mock).mockResolvedValueOnce({ email: customerEmail })
    log.disable()
  })

  it('should initialize only once', () => {
    klaviyo('track', 'whatever', {})
    expect(loadScript).toBeCalledTimes(1)
    expect(loadCustomer).toBeCalledTimes(1)
    klaviyo('track', 'whatever 2', { prop: 'value' })
    expect(loadScript).toBeCalledTimes(1)
    expect(loadCustomer).toBeCalledTimes(1)
    expect(window._learnq.push).toBeCalledTimes(0)
  })

  it('should finally call _learnq.push', async () => {
    expect(window._learnq.push).toBeCalledTimes(4)
    expect(window._learnq.push).toBeCalledWith(['account', KLAVIYO_ACCOUNT])
    expect(window._learnq.push).toBeCalledWith(['identify', { $email: customerEmail }])
    expect(window._learnq.push).toBeCalledWith(['track', 'whatever', {}])
    expect(window._learnq.push).toBeCalledWith(['track', 'whatever 2', { prop: 'value' }])
  })
})

import { renderHook } from '@testing-library/react-hooks'
import useYotpo from '.'
import loadScript from '../load-script'
import window from '../window'
jest.mock('../load-script')
jest.mock('../window', () => ({ yotpo: { refreshWidgets: () => 1 } }))

describe('useYotpo()', () => {
  it('should call script and yotpo functions', () => {
    const { waitFor } = renderHook(() => useYotpo([123124214]))
    expect(loadScript).toBeCalled()
    waitFor(() => expect(window.yotpo.refreshWidgets).toBeCalled())
  })
})

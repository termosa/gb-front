import { renderHook } from '@testing-library/react-hooks'
import loadYotpoScript from '.'
import loadScript from '../load-script'
jest.mock('../load-script')

describe('loadYotpoScript()', () => {
  it('should call script and yotpo functions', () => {
    renderHook(() => loadYotpoScript())
    expect(loadScript).toBeCalled()
  })
})

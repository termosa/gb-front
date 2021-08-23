import { act, renderHook } from '@testing-library/react-hooks'
import { Status } from 'use-defer'
import createGlobalStateHook from '.'

describe('createGlobalStateHook()', () => {
  it('should change state', () => {
    const { result, waitFor } = renderHook(
      createGlobalStateHook({
        status: Status.IDLE,
        token: undefined,
        items: [],
        itemCount: 0,
        totalPrice: 0,
        error: undefined,
      })
    )

    const [state, setState] = result.current

    expect(state).toStrictEqual({
      status: Status.IDLE,
      token: undefined,
      items: [],
      itemCount: 0,
      totalPrice: 0,
      error: undefined,
    })

    act(() =>
      setState({
        status: Status.SUCCESS,
        token: '1234',
        items: [1, 2, 3],
        itemCount: 555,
        totalPrice: 2,
        error: undefined,
      })
    )

    waitFor(() =>
      expect(state).toStrictEqual({
        status: Status.SUCCESS,
        token: '1234',
        items: [1, 2, 3],
        itemCount: 555,
        totalPrice: 2,
        error: undefined,
      })
    )
  })
})

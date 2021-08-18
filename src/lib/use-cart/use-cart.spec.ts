import useCart from '.'
import { renderHook } from '@testing-library/react-hooks'
import loadCart from '../load-cart'
import addItemToCart from '../add-item-to-cart'
import { Status } from 'use-defer'
jest.mock('../load-cart')
jest.mock('../add-item-to-cart')

describe('useCart()', () => {
  beforeEach(() => {
    ;(loadCart as jest.Mock).mockReset()
    ;(loadCart as jest.Mock).mockResolvedValue({
      status: Status.SUCCESS,
      token: 'f8d0aefa95fdbd9e6cbef63dcad1475c',
      items: [
        {
          productId: 39350262104142,
          quantity: 1,
          title: `Pandora's Box - Bath Bomb - 7`,
        },
      ],
      itemCount: 1,
      totalPrice: 16.95,
      error: undefined,
    })
    ;(addItemToCart as jest.Mock).mockReset()
    ;(addItemToCart as jest.Mock).mockResolvedValue({})
  })

  it('should not receive data when useData flag is off', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCart(false))

    await waitForNextUpdate()

    expect(result.current).toStrictEqual({
      status: 'idle',
      items: [],
      itemCount: 0,
      totalPrice: 0,
      addItem: expect.any(Function),
      token: undefined,
      error: undefined,
      reload: expect.any(Function),
    })

    result.current.addItem(39350262104142)

    await waitForNextUpdate()

    expect(addItemToCart).toBeCalledWith(39350262104142, 1)
    expect(result.current.status).toBe(Status.IDLE)
  })

  it('should have initial value', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCart(true))
    expect(result.current).toStrictEqual({
      status: Status.PENDING,
      token: undefined,
      items: [],
      itemCount: 0,
      totalPrice: 0,
      error: undefined,
      reload: expect.any(Function),
      addItem: expect.any(Function),
    })
    await waitForNextUpdate()
    expect(result.current.status).toEqual(Status.SUCCESS)
  })

  it('should return data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCart(true))
    await waitForNextUpdate()
    expect(result.current).toStrictEqual({
      status: Status.SUCCESS,
      token: 'f8d0aefa95fdbd9e6cbef63dcad1475c',
      items: [
        {
          productId: 39350262104142,
          quantity: 1,
          title: `Pandora's Box - Bath Bomb - 7`,
        },
      ],
      itemCount: 1,
      totalPrice: 16.95,
      error: undefined,
      reload: expect.any(Function),
      addItem: expect.any(Function),
    })
  })

  it('should add a new item', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCart(true))

    // Wait till initial data will be loaded
    await waitForNextUpdate()
    result.current.addItem(39350262104142)
    ;(loadCart as jest.Mock).mockResolvedValue({
      status: Status.SUCCESS,
      token: 'f8d0aefa95fdbd9e6cbef63dcad1475c',
      items: [
        {
          productId: 39350262104142,
          quantity: 2,
          title: `Pandora's Box - Bath Bomb - 7`,
        },
      ],
      itemCount: 2,
      totalPrice: 16.95,
    })

    await waitForNextUpdate()

    expect(addItemToCart).toBeCalledWith(39350262104142, 1)
    expect(loadCart).toBeCalledTimes(2)
    expect(result.current).toStrictEqual({
      status: Status.SUCCESS,
      token: 'f8d0aefa95fdbd9e6cbef63dcad1475c',
      items: [
        {
          productId: 39350262104142,
          quantity: 2,
          title: `Pandora's Box - Bath Bomb - 7`,
        },
      ],
      itemCount: 2,
      totalPrice: 16.95,
      error: undefined,
      reload: expect.any(Function),
      addItem: expect.any(Function),
    })
  })
})

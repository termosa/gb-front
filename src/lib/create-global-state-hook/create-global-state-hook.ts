import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import useComponentRefresh from '../use-component-refresh'

export interface GlobalStateHook<State> {
  (): [State, Dispatch<SetStateAction<State>>]
}

export function createGlobalStateHook<State = undefined>(initialState: State | (() => State)): GlobalStateHook<State> {
  const refreshers: Array<() => void> = []
  const refreshAll = () => refreshers.forEach((refresh) => refresh())
  let state = initialState instanceof Function ? initialState() : initialState

  return function useGlobalState() {
    const refresh = useComponentRefresh()

    useEffect(() => {
      refreshers.push(refresh)
      return () => {
        refreshers.splice(refreshers.findIndex(refresh), 1)
      }
    }, [refresh])

    const setState = useCallback(
      (newState: State | ((prevState: State) => State)) => {
        if (newState instanceof Function) state = newState(state)
        else state = newState
        refreshAll()
      },
      [refresh]
    )

    return [state, setState]
  }
}

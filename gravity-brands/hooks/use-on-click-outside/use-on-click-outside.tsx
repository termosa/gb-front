import React, { useEffect } from 'react'

export type Ref = React.MutableRefObject<HTMLElement | Array<HTMLElement | null> | null>

export const useOnClickOutside = (ref: Ref, handler: (ev: Event) => any) => {
  useEffect(
    () => {
      const listener: EventListener = (event: Event) => {
        const elements = (ref.current && (ref.current instanceof Array ? ref.current : [ref.current])) || []
        const clickedOnRef = elements.filter(Boolean).some((element) => element.contains(event.target))

        // Do nothing if clicking ref's element or descendent elements
        if (clickedOnRef) return

        handler(event)
      }
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add refOrFilterFn and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

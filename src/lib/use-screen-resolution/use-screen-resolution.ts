import * as useScreen from 'use-screen-size'

type ScreenSize = {
  // screen: BreakPoint
  width: number
  height: number
  /*lessThenSmall: boolean
  greaterThenSmall: boolean
  greaterThenMedium: boolean
  greaterThenLarge: boolean
  greaterThenExtraLarge: boolean*/
}

export function useScreenResolution(): ScreenSize {
  const size = useScreen.default()
  return {
    /*screen: size.screen,*/
    width: size.width,
    height: size.height,
    /*lessThenSmall: size.screen < BreakPoint.s,
    greaterThenSmall: size.screen >= BreakPoint.s,
    greaterThenMedium: size.screen >= BreakPoint.m,
    greaterThenLarge: size.screen >= BreakPoint.l,
    greaterThenExtraLarge: size.screen >= BreakPoint.xl,*/
  }
}

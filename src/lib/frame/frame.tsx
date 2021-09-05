import React from 'react'

export type FramePart<Props = Record<string, unknown>> = {
  component: string | React.FunctionComponent<Props> | React.ComponentClass<Props> | (() => React.ReactElement | null)
  props?: Props
  children?: FramePart | Array<FramePart> | string
}

export type FrameProps = {
  frames: FramePart | Array<FramePart> | string
}

export function Frame({ frames }: FrameProps): React.ReactElement {
  if (typeof frames === 'string' || frames instanceof String) return <React.Fragment>{frames}</React.Fragment>
  if (!(frames instanceof Array)) {
    return React.createElement(frames.component, frames.props, frames.children && <Frame frames={frames.children} />)
  }
  return (
    <React.Fragment>
      {(frames instanceof Array ? frames : [frames]).map((frame, index) => (
        <Frame key={index} frames={frame} />
      ))}
    </React.Fragment>
  )
}

export function repeat<ResultType = unknown>(
  fn: (index: number) => ResultType | void,
  timeout = 0,
  limit = Infinity
): Promise<ResultType | void> {
  if (limit < 1) return Promise.resolve()
  return new Promise<ResultType | void>((resolve, reject) => {
    let index = 0

    const timerFunction = () => {
      try {
        const result = fn(index++)
        if (typeof result !== 'undefined') return resolve(result)
      } catch (error) {
        reject(error)
      }
      if (index >= Math.floor(limit)) {
        return resolve()
      }

      setTimeout(timerFunction, timeout)
    }

    timerFunction()
  })
}

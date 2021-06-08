export function resolvePageProps<PropsType = Record<string, Promise<unknown>>>(
  propsResolver: () => Record<string, Promise<unknown>>
) {
  return async (): Promise<{ props: PropsType }> => {
    const propsPromises = await propsResolver()
    const values = await Promise.all(Object.values(propsPromises))
    const props = Object.keys(propsPromises).reduce(
      (propsAggregate, key, index) => Object.assign(propsAggregate, { [key]: values[index] }),
      {}
    ) as PropsType
    return { props }
  }
}

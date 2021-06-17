import { GetServerSidePropsContext } from 'next'

export function resolvePageProps<PropsType = Record<string, Promise<unknown>>>(
  propsResolver: (context: GetServerSidePropsContext) => Record<string, Promise<unknown>>
) {
  return async (context: GetServerSidePropsContext): Promise<{ props: PropsType }> => {
    const propsPromises = await propsResolver(context)
    const values = await Promise.all(Object.values(propsPromises))
    const props = Object.keys(propsPromises).reduce(
      (propsAggregate, key, index) => Object.assign(propsAggregate, { [key]: values[index] }),
      {}
    ) as PropsType
    return { props }
  }
}

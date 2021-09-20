export type FormPayloadSimpleTypes = string | number | boolean
export type FormPayloadData = {
  [key: string]: FormPayloadData | FormPayloadSimpleTypes | null | undefined
}

const extractValues = (
  data: FormPayloadData,
  parentName: undefined | string = undefined
): Array<{ name: string; value: FormPayloadSimpleTypes }> => {
  const patchName = (name: string) => (parentName ? `${parentName}[${name}]` : name)
  const values: Array<{ name: string; value: FormPayloadSimpleTypes }> = []
  Object.keys(data).forEach((name) => {
    const value = data[name]
    if (typeof value === 'undefined' || value === null) return
    if (typeof value !== 'object') values.push({ name: patchName(name), value })
    else extractValues(value, patchName(name)).forEach((pair) => values.push(pair))
  })
  return values
}

export function createFormData(data: FormPayloadData): FormData {
  const payload = new FormData()
  extractValues(data).forEach((pair) => {
    payload.append(pair.name, pair.value.toString())
  })
  return payload
}

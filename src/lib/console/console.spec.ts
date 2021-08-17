import console from '.'

describe('console', () => {
  it('should be set to specific value', () => {
    expect(console).toHaveProperty('log')
    expect(console).toHaveProperty('warn')
    expect(console).toHaveProperty('error')
  })
})

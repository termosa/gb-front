import window from '.'

describe('window', () => {
  it('should be set to specific value', () => {
    expect(window).toHaveProperty('console')
  })
})

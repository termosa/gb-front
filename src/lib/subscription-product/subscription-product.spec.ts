import subscriptionProduct from '.'

describe('subscriptionProduct', () => {
  it('should be set to specific value', () => {
    expect(subscriptionProduct).toStrictEqual({
      variantsMap: {
        10: 39299559129166,
        5: 39299558965326,
        6: 39299558998094,
        7: 39299559030862,
        8: 39299559063630,
        9: 39299559096398,
      },
    })
  })
})

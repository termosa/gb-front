import api from '../../modules/api'
import loadProduct, { Product } from '../load-product'
import oldApiBase from '../old-api-base'

export function loadMembershipProductForSubscriptionProduct(subscriptionProductId: number): Promise<Product> {
  return api<Array<{ membership_product?: { id?: string } }>>({
    base: oldApiBase,
    path: '/shopify_endpoint/list_products',
    query: { products: subscriptionProductId },
  }).then((response) => {
    const membershipProductId = response[0].membership_product?.id

    if (!membershipProductId) return Promise.reject('Cannot get membership product id')
    return loadProduct(membershipProductId)
  })
}

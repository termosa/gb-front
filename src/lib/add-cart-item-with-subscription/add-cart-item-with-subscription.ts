import { CartItem } from '../normalize-cart-item'
import { VariantSize } from '../../modules/normalize-product-variant'
import loadCart from '../load-cart'
import subscriptionProduct from '../subscription-product'
import addCartItems from '../add-cart-items'
import changeCartItem from '../change-cart-item'

export type { VariantSize } from '../../modules/normalize-product-variant'

const generateDiscountProperties = (size: VariantSize) => ({
  discount: 0.2,
  shipping_discount: 1,
  create_bt_subscription: true,
  subscription_product_id: subscriptionProduct.variantsMap[size],
})

export function addCartItemWithSubscription(
  variantId: number,
  subscriptionProductSize: VariantSize | undefined,
  quantity = 1
): Promise<{ item: CartItem; subscriptionItem: CartItem }> {
  // TODO: Ensure that subscription product is replaced by different subscription product if any added

  // TODO: Ensure that subscription product size is selected via modal window if not passed inside of the function
  if (!subscriptionProductSize) throw new Error('Not defined variant size is not supported yet')

  return loadCart().then(({ items }) => {
    const subscriptionProductVariantId = subscriptionProduct.variantsMap[subscriptionProductSize]
    const newVariantInCart = items.find((item) => item.variantId === variantId)
    const subscriptionProductInCart =
      subscriptionProductVariantId && items.find((item) => item.variantId === subscriptionProductVariantId)

    if (!newVariantInCart) {
      return addCartItems([
        {
          variantId,
          quantity,
          properties: generateDiscountProperties(subscriptionProductSize),
        },
        ...(subscriptionProductInCart ? [] : [{ variantId: subscriptionProductVariantId }]),
      ]).then((items) => ({
        item: items.find((item) => item.variantId === variantId) as CartItem,
        subscriptionItem: items.find((item) => item.variantId === subscriptionProductVariantId) as CartItem,
      }))
    }

    return changeCartItem(
      newVariantInCart.key,
      generateDiscountProperties(subscriptionProductSize),
      newVariantInCart.quantity + 1
    ).then(({ items: [item] }) => {
      if (subscriptionProductInCart) return { item, subscriptionItem: subscriptionProductInCart }
      return addCartItems([{ variantId: subscriptionProductVariantId }]).then(([subscriptionItem]) => ({
        item,
        subscriptionItem,
      }))
    })
  })
}

if (typeof window !== 'undefined') Object.assign(window, { addCartItemWithSubscription })

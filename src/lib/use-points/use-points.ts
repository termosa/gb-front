import { useContext, useMemo } from 'react'
import useDefer from 'use-defer'
import api from '../../modules/api'
import CustomerOrdersDetailsContext from '../../modules/customer-orders-details-context'
import oldApiBase from '../old-api-base'
import useCart from '../use-cart'

type ServerCartDetails = {
  total: number
  discount: number
  line_items: Array<{
    product_id: number
    quantity: number
    price: string
    line_price: string
    variant_inventory_quantity: number
    variant_inventory_management: null | string
    product_type: string
  }>
}

const loadCartDetails = (token: string) =>
  api<ServerCartDetails>({
    base: oldApiBase,
    path: '/api/v1/cart/',
    query: { cart_token: token },
  })

const loadRewards = () =>
  api<Array<{ points: number; shopify_product_id: string }>>({
    base: oldApiBase,
    path: '/api/v1/loyalty/rewards/',
  })

const loadPromotions = () =>
  api<{ levels: Array<{ name: 'Inner Circle' | 'Gold' | 'Platinum'; multiplier: number }> }>({
    base: oldApiBase,
    path: '/api/v1/loyalty/modifiers/',
  })

export function usePoints(): number {
  const customerOrdersDetails = useContext(CustomerOrdersDetailsContext)
  const cart = useCart(true)

  const cartDetailsRequest = useDefer(() => (cart.token ? loadCartDetails(cart.token) : undefined), [cart.token], [])
  const rewardsRequest = useDefer(loadRewards, [], [])
  const promotionsRequest = useDefer(loadPromotions, [], [])

  const userPoints = customerOrdersDetails?.totalPoints || 0

  const cartPoints = useMemo(() => {
    if (!cartDetailsRequest.value || !rewardsRequest.value) return 0
    const itemsTotal = cartDetailsRequest.value.line_items.reduce((total, item) => {
      const reward = rewardsRequest.value?.find((rewardItem) => +rewardItem.shopify_product_id === item.product_id)
      if (reward) return total - reward.points * item.quantity

      if (item.variant_inventory_management === null) return total + Math.ceil(+item.line_price)
      if (item.variant_inventory_quantity <= 0) return total
      if (item.variant_inventory_quantity >= item.quantity) return total + Math.ceil(item.quantity * +item.price)
      return total + Math.ceil(item.variant_inventory_quantity * +item.price)
    }, 0)
    return itemsTotal - (cartDetailsRequest.value.discount || 0)
  }, [cartDetailsRequest.value, rewardsRequest.value])

  const multiplier = useMemo(() => {
    if (!customerOrdersDetails || !promotionsRequest.value) return 1
    if (customerOrdersDetails.isICMember && customerOrdersDetails.isICMembershipActive) {
      const innerCirclePromotion = promotionsRequest.value.levels.find((promotion) => promotion.name === 'Inner Circle')
      if (innerCirclePromotion) return innerCirclePromotion.multiplier
    }
    const activePromotion = promotionsRequest.value.levels.find(
      (promotion) => promotion.name === customerOrdersDetails.levelName
    )
    return activePromotion?.multiplier || 1
  }, [customerOrdersDetails, promotionsRequest.value])

  return userPoints + cartPoints * multiplier
}

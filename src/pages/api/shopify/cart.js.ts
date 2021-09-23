import { NextApiRequest, NextApiResponse } from 'next'

export default function customer(_req: NextApiRequest, res: NextApiResponse<string>): void {
  res.status(200).send(
    JSON.stringify({
      token: '3085884ad00f70565d6c6aae1290c255',
      note: null,
      attributes: {},
      original_total_price: 0,
      total_price: 0,
      total_discount: 0,
      total_weight: 0.0,
      item_count: 0,
      items: [],
      requires_shipping: false,
      currency: 'USD',
      items_subtotal_price: 0,
      cart_level_discount_applications: [],
    })
  )
}

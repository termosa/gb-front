import changeCartItem from '.'
import shopifyApi from '../shopify-api'
jest.mock('../shopify-api')

describe('changeCartItem()', () => {
  beforeEach(() => {
    ;(shopifyApi as jest.Mock).mockReset()
    ;(shopifyApi as jest.Mock).mockResolvedValue({
      token: '1d19a32178501c44ef2223d73c54d16d',
      note: null,
      attributes: {},
      total_price: 9100,
      total_weight: 0,
      item_count: 5,
      items: [
        {
          id: 794864229,
          properties: {
            discount: 0.6,
          },
          quantity: 5,
          variant_id: 794864229,
          key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
          title: 'Red Rain Coat - Small',
          price: 12900,
          line_price: 12900,
          final_price: 12900,
          final_line_price: 12900,
          sku: null,
          grams: 0,
          vendor: 'Shopify',
          taxable: true,
          product_id: 388319916,
          product_has_only_default_variant: false,
          gift_card: false,
          url: '/products/red-rain-coat?variant=794864229',
          featured_image: {
            url: 'http://cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893',
            aspect_ratio: 1.0,
            alt: 'Red rain coat with a hood',
          },
          image: 'http://cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893',
          handle: 'red-rain-coat',
          requires_shipping: true,
          product_title: 'Red Rain Coat',
          product_description: 'A bright red rain coat for rainy days!',
          product_type: 'Coat',
          variant_title: 'Red',
          variant_options: ['Red'],
          options_with_values: [
            {
              name: 'Color',
              value: 'Red',
            },
          ],
        },
      ],
      requires_shipping: true,
      currency: 'CAD',
      items_subtotal_price: 18200,
      cart_level_discount_applications: [
        {
          type: 'automatic',
          key: '059b5e54-3c5d-4e7e-b377-8e09d8376269',
          title: '50% Summer Deal',
          description: null,
          value: '50.0',
          created_at: '2019-04-10T20:49:00.148Z',
          value_type: 'percentage',
          allocation_method: 'across',
          target_selection: 'all',
          target_type: 'line_item',
          total_allocated_amount: 9100,
        },
      ],
    })
  })

  it('should make a call to Shopify API', () => {
    changeCartItem('794864229', { discount: 0.6 }, 5)
    expect(shopifyApi).toBeCalledWith({
      path: '/cart/change.js',
      method: 'POST',
      body: {
        id: '794864229',
        quantity: 5,
        properties: { discount: 0.6 },
      },
    })
  })

  it('should return normalized cart', () => {
    expect(changeCartItem('794864229', { discount: 0.6 }, 5)).resolves.toEqual({
      items: [
        {
          key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
          productId: 794864229,
          variantId: 794864229,
          quantity: 5,
          title: 'Red Rain Coat - Small',
          properties: {
            discount: 0.6,
          },
        },
      ],
      itemCount: 5,
      token: '1d19a32178501c44ef2223d73c54d16d',
      totalPrice: 91,
    })
  })
})

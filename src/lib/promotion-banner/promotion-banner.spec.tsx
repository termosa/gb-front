import loadPromoDetails from '../load-promo-details'

import api from '../../modules/api'
jest.mock('../../modules/api')

describe('<PromotionBanner />', () => {
  beforeEach(() => {
    ;(api as jest.Mock).mockReset()
    ;(api as jest.Mock).mockResolvedValue({
      detailsVariant: {
        detailsVariant: {
          detailsVariant: [{ available: true, id: 39448392761422, title: '5' }],
          expiration: { days: 0, hours: 1, minutes: 0, seconds: 0, total_sec: 3600 },
          id: 6630796951630,
          name: "Midnight Collector's Item",
          requirements:
            "Your collector's item will be added to your cart at checkout with any purchase! While supplies last.",
          src: 'https://cdn.shopify.com/s/files/1/0548/5721/products/WPS_06-05_3860.png?v=1629412661',
          title: "You've found a Midnight Collector's Item.",
        },
      },
    })
  })

  it('should call endpoint', async () => {
    await expect(loadPromoDetails('blackcat')).resolves.toEqual({
      detailsVariant: {
        detailsVariant: {
          detailsVariant: {
            detailsVariant: [{ available: true, id: 39448392761422, title: '5' }],
            expiration: { days: 0, hours: 1, minutes: 0, seconds: 0, total_sec: 3600 },
            id: 6630796951630,
            name: "Midnight Collector's Item",
            requirements:
              "Your collector's item will be added to your cart at checkout with any purchase! While supplies last.",
            src: 'https://cdn.shopify.com/s/files/1/0548/5721/products/WPS_06-05_3860.png?v=1629412661',
            title: "You've found a Midnight Collector's Item.",
          },
        },
      },
      expiration: undefined,
      id: NaN,
      name: undefined,
      requirements: undefined,
      src: undefined,
      title: undefined,
    })
  })
})

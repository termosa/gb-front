import normalizeCartItem from '.'

describe('normalizeCartItem()', () => {
  it('should normalize cart item', () => {
    expect(
      normalizeCartItem({
        id: 39350262104142,
        properties: {},
        quantity: 1,
        variant_id: 39350262104142,
        key: '39350262104142:7dc5646f775b6a5af1ce11717f7b8787',
        title: "Pandora's Box - Bath Bomb - 7",
        price: 1695,
        original_price: 1695,
        discounted_price: 1695,
        line_price: 1695,
        original_line_price: 1695,
        total_discount: 0,
        discounts: [],
        sku: '6BPBX07',
        grams: 1361,
        vendor: 'Fragrant Jewels',
        taxable: true,
        product_id: 6592418545742,
        product_has_only_default_variant: false,
        gift_card: false,
        final_price: 1695,
        final_line_price: 1695,
        url: '/products/pandoras-box-bath-bomb?variant=39350262104142',
        featured_image: {
          aspect_ratio: 1.25,
          alt: "Pandora's Box - Bath Bomb",
          height: 960,
          url: 'https://cdn.shopify.com/s/files/1/0548/5721/products/pandoras_box_bb_1_comp.png?v=1628521677',
          width: 1200,
        },
        image: 'https://cdn.shopify.com/s/files/1/0548/5721/products/pandoras_box_bb_1_comp.png?v=1628521677',
        handle: 'pandoras-box-bath-bomb',
        requires_shipping: true,
        product_type: 'Bath Bomb',
        product_title: "Pandora's Box - Bath Bomb",
        product_description:
          '\n\n\n\n\nOverview\n\n\nLust. Gluttony. Greed. Sloth. Wrath. Envy. Pride.\nWe are not victims of the deadly sins. We willingly partake in them. When Pandora opened her box, releasing this treachery into our world, we were happy to indulge\u2014time and time again. But when darkness is all that lives behind you, hope offers a new path forward. As mortals, let us not hide behind our past deeds, let\u2019s embrace them, call them by name, and choose to banish them for the rest of time.\n\n\n\n\nFragrance\n\n\nIf luxuriating in your sins is what delights you, our Pandora\u2019s Box bath bomb will allow you to partake in all your scandalous ways. Drop it in and watch every sin pour out in a stunning display of bright purple and blue. Enjoy musky, yet floral notes of violet leaf, mandarin, blushed dahlian, white cedar, and rose musk as you bathe in essential oils and natural minerals.\n\n\n\n\nJewelry\n\n\nAs your bath bomb fully releases into the world, you\u2019ll discover 1 of 8 rhodium plated rings. Each ring is engraved with one of the seven deadly sins inside the band\u2014an opportunity for you to name your fault. But on the outside, the virtue is engraved\u2014an opportunity to hide the past and live the outward-facing solution. You\u2019ll find the following stones set within it\u2019s specific ring:\nPride -Black Diamond ShimmerGluttony - Fuschia ShimmerSloth - Light Sapphire ShimmerEnvy - Peridot ShimmerGreed - Silk ShimmerWrath - Tangerine ShimmerLust - Hyacinth ShimmerHope - Light Colorado Topaz Shimmer\n\n\n\n\nMore Details\n\n\n\nNet Weight: \u00a06 oz (170 g)\n\n\nBath bomb scent:\u00a0Violet leaf, mandarin, blushed dahlian, white cedar, \u0026 rose musk.\nBath bomb ingredients:\u00a0Sodium Bicarbonate, Citric Acid, Zea Mays (Corn) Starch, Fragrance, Magnesium Sulfate, Sodium Chloride, Persea Gratissima (Avocado) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Helianthus Annuus (Sunflower) Seed Oil, Butyrospermum Parkii (Shea) Butter, Polysorbate 20, Sodium Lauryl Sulfoacetate, Hamamelis Virginiana (Witch Hazel) Extract, Glycerin, Color 42090, Color 19140, Red 33, Red 28, Red 22, Blue 1\n\n\n\n',
        variant_title: '7',
        variant_options: ['7'],
        options_with_values: [{ name: 'Ring Size', value: '7' }],
        line_level_discount_allocations: [],
        line_level_total_discount: 0,
      })
    ).toStrictEqual({
      quantity: 1,
      title: `Pandora's Box - Bath Bomb - 7`,
      productId: 39350262104142,
    })
  })
})

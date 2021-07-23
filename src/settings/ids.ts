console.log('\n\n\n\n\nAPP_ENV:', process.env.APP_ENV)
export const INNER_CIRCLE_PRODUCT_ID = process.env.APP_ENV === 'production' ? 6542141194318 : 6536762654810
export const TRENDING_PRODUCTS_COLLECTION_ID = process.env.APP_ENV === 'production' ? 261358780494 : 160593838170
export const RECOMMENDED_PRODUCTS_COLLECTION_ID = process.env.APP_ENV === 'production' ? 260630315086 : 173959905370
export const POTENTIAL_PRODUCTS_COLLECTION_ID = process.env.APP_ENV === 'production' ? 260601905230 : 174027145306

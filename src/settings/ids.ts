const PRODUCTION_IC_PRODUCT_ID = 6592569704526
const PRODUCTION_TRENDING_COLLECTION_ID = 262384156750
const PRODUCTION_RECOMMENDED_BATH_BOMBS_COLLECTION_ID = 262384648270
const PRODUCTION_RECOMMENDED_JEWEL_CANDLES_COLLECTION_ID = 262384681038
const PRODUCTION_RECOMMENDED_SUGAR_SCRUBS_COLLECTION_ID = 262384746574
const PRODUCTION_RECOMMENDED_BUNDLES_COLLECTION_ID = 262384713806

const STAGING_IC_PRODUCT_ID = 6536762654810
const STAGING_TRENDING_COLLECTION_ID = 254551491
const STAGING_RECOMMENDED_BATH_BOMBS_COLLECTION_ID = 262267666522
const STAGING_RECOMMENDED_JEWEL_CANDLES_COLLECTION_ID = 262267699290
const STAGING_RECOMMENDED_SUGAR_SCRUBS_COLLECTION_ID = 262267764826
const STAGING_RECOMMENDED_BUNDLES_COLLECTION_ID = 262267830362

export const INNER_CIRCLE_PRODUCT_ID =
  process.env.APP_ENV === 'staging' ? STAGING_IC_PRODUCT_ID : PRODUCTION_IC_PRODUCT_ID
export const TRENDING_PRODUCTS_COLLECTION_ID =
  process.env.APP_ENV === 'staging' ? STAGING_TRENDING_COLLECTION_ID : PRODUCTION_TRENDING_COLLECTION_ID

export const RECOMMENDED_BATH_BOMBS_COLLECTION_ID =
  process.env.APP_ENV === 'staging'
    ? STAGING_RECOMMENDED_BATH_BOMBS_COLLECTION_ID
    : PRODUCTION_RECOMMENDED_BATH_BOMBS_COLLECTION_ID
export const RECOMMENDED_JEWEL_CANDLES_COLLECTION_ID =
  process.env.APP_ENV === 'staging'
    ? STAGING_RECOMMENDED_JEWEL_CANDLES_COLLECTION_ID
    : PRODUCTION_RECOMMENDED_JEWEL_CANDLES_COLLECTION_ID
export const RECOMMENDED_SUGAR_SCRUBS_COLLECTION_ID =
  process.env.APP_ENV === 'staging'
    ? STAGING_RECOMMENDED_SUGAR_SCRUBS_COLLECTION_ID
    : PRODUCTION_RECOMMENDED_SUGAR_SCRUBS_COLLECTION_ID
export const RECOMMENDED_BUNDLES_COLLECTION_ID =
  process.env.APP_ENV === 'staging'
    ? STAGING_RECOMMENDED_BUNDLES_COLLECTION_ID
    : PRODUCTION_RECOMMENDED_BUNDLES_COLLECTION_ID

export const GLOBAL_BANNER_LINK = 'all-products/?d=25off'

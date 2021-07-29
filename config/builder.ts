if (!process.env.BUILDER_KEY) {
  throw new Error('Missing env varialbe BUILDER_KEY')
}

export default {
  apiKey: process.env.BUILDER_KEY,
}

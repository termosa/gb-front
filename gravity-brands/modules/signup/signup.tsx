import api from '@fragrantjewels/gravity-brands.modules.api'

export const signup = (email: string) =>
  api({
    path: '/customers/create_braintree_subscription/',
    method: 'POST',
    body: { customer_email: email },
  })
  .catch((error?: { message?: string }) => Promise.reject(error?.message || error || 'Could not sign up your email now'))

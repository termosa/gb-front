import api from '@fragrantjewels/gravity-brands.modules.api'

export const signup = (email: string): Promise<void> =>
  api<void>({
    path: '/customers/create_braintree_subscription/',
    method: 'POST',
    body: { customer_email: email },
  }).catch((error?: { message?: string }) => {
    return Promise.reject(error?.message || error || 'Could not sign up your email now')
  })

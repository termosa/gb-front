import api from '../../../src/modules/api'
import normalizeCustomerOrdersDetails, {
  CustomerOrdersDetails,
  ServerCustomerOrdersDetails,
} from '../normalize-customer-orders-details'

export { CustomerLevel } from '../normalize-customer-orders-details'
export type { CustomerOrdersDetails } from '../normalize-customer-orders-details'

export function loadCustomerOrdersDetails(email: string): Promise<CustomerOrdersDetails> {
  return api<ServerCustomerOrdersDetails>({
    path: `/customers/customer_data/`,
    query: { customer_email: email },
  }).then(normalizeCustomerOrdersDetails)
}

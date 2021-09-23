import { NextApiRequest, NextApiResponse } from 'next'

const Greg = {
  id: 771416451,
  email: 'g.akimovs@gmail.com',
  first_name: 'Grigorijs',
  last_name: 'Akimovs',
  phone: null,
  default_address: {
    id: 3019812995150,
    customer_id: 771416451,
    first_name: 'Grigorijs',
    last_name: 'Akimovs',
    company: null,
    address1: 'sdas',
    address2: '',
    city: 'Los Ange',
    province: 'Arizona',
    country: 'United States',
    zip: '90021',
    phone: null,
    name: 'Grigorijs Akimovs',
    province_code: 'AZ',
    country_code: 'US',
    country_name: 'United States',
    default: true,
  },
}

export default function customer(_req: NextApiRequest, res: NextApiResponse<string>): void {
  res.status(200).send(process.env.AUTHENTICATED ? JSON.stringify(Greg) : 'null')
}

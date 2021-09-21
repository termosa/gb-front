import { NextApiRequest, NextApiResponse } from 'next'

export default function status(_req: NextApiRequest, res: NextApiResponse<string>): void {
  res.status(200).send('OK')
}

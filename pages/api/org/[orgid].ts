// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { organizations, Organization  } from '../../../org-spotlight-data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Organization>
) {
  const { orgid } = req.query
  const org = organizations.find((k: any) => k.id === orgid) || {} as Organization
  res.status(200).json(org)
}
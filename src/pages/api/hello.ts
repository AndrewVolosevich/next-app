// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const fakeData = [
  {id: 1, user: 'User1'},
  {id: 2, user: 'User2'},
  {id: 3, user: 'User3'},
  {id: 4, user: 'User4'},
  {id: 5, user: 'User5'},
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(fakeData)
}

import { CartDetailType } from './cartDetail.type'

export type CartType = {
  id: number
  status: number
  accountId: number
  details: CartDetailType[]
  total: number
}

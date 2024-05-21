import { PaintingType } from './painting.type'

export type CartDetailType = {
  id: number
  qty: number
  painting: PaintingType
  cartId: number
  total: number
}

import { CartDetailType } from './cartDetail.type'

export interface Order {
  id: number
  orderDate: string
  deliveryDate: string
  completionDate: string
  cancellationDate: string
  finishedDate: string
  status: string
  paymentStatus: string
  details: CartDetailType[]
  shippingCost: number
  shippingAddress: string
  total: number
}

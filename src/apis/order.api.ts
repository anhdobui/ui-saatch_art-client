import { Order } from 'src/type/order.type'
import http from 'src/utils/http'
export type OrderPost = {
  cartId: number
  accountId: number
  shippingCost?: number
  deliveryAddress?: string
}

export const orderPaintingUnpaid = (body: OrderPost) => http.post<Order>(`orders`, body)
export const orderPaintingVnPay = (body: OrderPost) => http.post<{ paymentUrl: string }>(`vnpay/create`, body)
export const getOrders = (accountId: number) => http.get<Order[]>(`orders?accountId=${accountId}`)
export const cancelOrder = (orderId: number) => http.put<Order>(`orders/${orderId}`, { status: 'Canceled' })

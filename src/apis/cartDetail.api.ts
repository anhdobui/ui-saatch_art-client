import { CartDetailType } from 'src/type/cartDetail.type'
import http from 'src/utils/http'

export const addPrdToCart = (body: { paintingId: number; accountId: number }) =>
  http.post<CartDetailType>('cart-detail', body)
export const deleteCartDetail = (cartDetailId: number) => http.delete(`cart-detail/${cartDetailId}`)
export const updateQtyCartDetail = (body: { cartDetailId: number; qty: number }) =>
  http.put('cart-detail', { id: body.cartDetailId, qty: body.qty })

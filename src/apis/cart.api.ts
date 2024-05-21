import { CartType } from 'src/type/cart.type'
import http from 'src/utils/http'

export const getCartByAccId = (accId: number) => http.get<CartType>(`cart?accountId=${accId}`)

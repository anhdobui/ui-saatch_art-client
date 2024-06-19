import { createContext, useState } from 'react'
import { getDataShipFromLS } from 'src/utils/ship'

export interface DataShipInf {
  city: {
    id: number | ''
    name?: string
  }
  district: {
    id: number | ''
    name?: string
  }
  ward: {
    code: string
    name?: string
  }
  phone: string
  address: string
  service_fee?: number
  insurance_fee?: number
  total?: number
}
interface CartContextInterface {
  isCheckout: boolean
  setIsCheckout: React.Dispatch<React.SetStateAction<boolean>>
  dataShip: DataShipInf
  setDataShip: React.Dispatch<React.SetStateAction<DataShipInf>>
  isReadyOrder: boolean
  setIsReadyOrder: React.Dispatch<React.SetStateAction<boolean>>
  payMethod: string
  setPayMethod: React.Dispatch<React.SetStateAction<string>>
}
const initCartContext: CartContextInterface = {
  isCheckout: false,
  setIsCheckout: () => null,
  dataShip: getDataShipFromLS(),
  setDataShip: () => null,
  isReadyOrder: false,
  setIsReadyOrder: () => null,
  payMethod: 'vnpay',
  setPayMethod: () => null
}
export const CartContext = createContext<CartContextInterface>(initCartContext)
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCheckout, setIsCheckout] = useState<boolean>(initCartContext.isCheckout)
  const [dataShip, setDataShip] = useState<DataShipInf>(initCartContext.dataShip)
  const [isReadyOrder, setIsReadyOrder] = useState<boolean>(initCartContext.isReadyOrder)
  const [payMethod, setPayMethod] = useState<string>(initCartContext.payMethod)
  return (
    <CartContext.Provider
      value={{
        isCheckout,
        setIsCheckout,
        dataShip,
        setDataShip,
        isReadyOrder,
        setIsReadyOrder,
        payMethod,
        setPayMethod
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

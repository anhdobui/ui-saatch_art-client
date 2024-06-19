import { DataShipInf } from 'src/contexts/cart.context'

export const getDataShipFromLS = () => {
  const result = localStorage.getItem('dataShip')
  return result
    ? JSON.parse(result)
    : {
        city: {
          id: ''
        },
        district: {
          id: ''
        },
        ward: {
          code: ''
        },
        phone: '',
        address: ''
      }
}
export const setDataShipToLS = (dataShip: DataShipInf) => {
  localStorage.setItem('dataShip', JSON.stringify(dataShip))
}
export const clearDataShipLS = () => {
  localStorage.removeItem('dataShip')
}

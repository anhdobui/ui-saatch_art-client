import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { orderPaintingUnpaid, orderPaintingVnPay, OrderPost } from 'src/apis/order.api'
import { AppContext } from 'src/contexts/app.context'
import OrderSummary from '../OrderSummary'
import { CartContext } from 'src/contexts/cart.context'
import { roundToTwoDecimals } from 'src/utils/utils'
import { clearDataShipLS } from 'src/utils/ship'

function InfoPayment() {
  const { dataCart, profile } = useContext(AppContext)
  const { dataShip, setDataShip, isCheckout, setIsCheckout, payMethod } = useContext(CartContext)
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const queryClient = useQueryClient()
  const mutationOrderUnpaid = useMutation({
    mutationFn: (body: OrderPost) => orderPaintingUnpaid(body),
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', { accountId: profile?.id }])
      queryClient.invalidateQueries(['orders', { accountId: profile?.id }])
      toast.success('Đặt hàng thành công')
      navigate('/user/order-list')
    }
  })
  const mutationOrderPaid = useMutation({
    mutationFn: (body: OrderPost) => orderPaintingVnPay(body),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['carts', { accountId: profile?.id }])
      queryClient.invalidateQueries(['orders', { accountId: profile?.id }])
      toast.success('Đặt hàng thành công')
      const paymentUrl = data.data.paymentUrl
      console.log(data)
      window.open(paymentUrl, '_blank')
      navigate('/user/order-list')
    }
  })

  const handleSubmitOrder = () => {
    setIsSubmitting(true)
    if (dataCart?.id && profile?.id) {
      const bodyOrders = {
        cartId: dataCart?.id,
        accountId: profile?.id,
        deliveryAddress: `${dataShip.city.name},${dataShip.district.name},${dataShip.ward.name},${dataShip.address}`,
        phoneOrder: dataShip.phone != '' ? dataShip.phone : null,
        shippingCost: dataShip.total
      }
      if (payMethod === 'vnpay') {
        mutationOrderPaid.mutate(bodyOrders)
      } else {
        mutationOrderUnpaid.mutate(bodyOrders)
      }
    }
    console.log('shipping', dataShip)
    clearDataShipLS()
    setDataShip({
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
      address: '',
      insurance_fee: undefined,
      service_fee: undefined,
      total: undefined
    })
  }
  const handleCheckout = () => {
    setIsCheckout(true)
  }
  return (
    <div className='flex flex-wrap '>
      {isCheckout && <OrderSummary />}
      <div className='mb-1 flex w-full justify-between font-bold  text-gray-51'>
        <p className='text-[20px] '>Estimated Total</p>
        <p>
          $
          {isCheckout
            ? roundToTwoDecimals(Number(dataCart?.total) + Number(dataShip.total ? dataShip.total : 0))
            : Number(dataCart?.total)}
        </p>
      </div>
      <ol className='my-[10px] w-full p-[10px]'></ol>
      <button
        onClick={() => {
          if (!isCheckout) {
            handleCheckout()
          } else {
            handleSubmitOrder()
          }
        }}
        disabled={isSubmitting || (isCheckout && dataShip.total == undefined)}
        className={`mb-[30px] flex h-[60px] w-full cursor-pointer items-center justify-center bg-green-128-188-48 font-bold text-white outline-0 ${
          isSubmitting || (isCheckout && dataShip.total == undefined) ? 'opacity-50' : ''
        }`}
      >
        {isCheckout ? 'Place Order' : 'Checkout'}
      </button>
    </div>
  )
}

export default InfoPayment

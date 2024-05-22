import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { orderPainting, OrderPost } from 'src/apis/order.api'
import { AppContext } from 'src/contexts/app.context'

function InfoPayment() {
  const { dataCart, profile } = useContext(AppContext)
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const queryClient = useQueryClient()
  const mutationOrder = useMutation({
    mutationFn: (body: OrderPost) => orderPainting(body),
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', { accountId: profile?.id }])
      queryClient.invalidateQueries(['orders', { accountId: profile?.id }])
      toast.success('Đặt hàng thành công')
      navigate('/user/order-list')
    }
  })
  const handleSubmitOrder = () => {
    setIsSubmitting(true)
    if (dataCart?.id && profile?.id) {
      const bodyOrders = {
        cartId: dataCart?.id,
        accountId: profile?.id
      }
      mutationOrder.mutate(bodyOrders)
    }
  }
  return (
    <div className='flex flex-wrap '>
      <div className='mb-1 flex w-full justify-between font-bold  text-gray-51'>
        <p className='text-[20px] '>Estimated Total</p>
        <p>${dataCart?.total}</p>
      </div>
      <ol className='my-[10px] w-full p-[10px]'></ol>
      <button
        onClick={handleSubmitOrder}
        disabled={isSubmitting}
        className='mb-[30px] flex h-[60px] w-full cursor-pointer items-center justify-center bg-green-128-188-48 font-bold text-white'
      >
        Checkout
      </button>
    </div>
  )
}

export default InfoPayment

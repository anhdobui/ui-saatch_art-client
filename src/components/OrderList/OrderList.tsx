import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faTimesCircle,
  faTruck,
  faCalendarAlt,
  faUndoAlt,
  faBox,
  faMoneyBill,
  faHourglassHalf,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import 'tailwindcss/tailwind.css'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AppContext } from 'src/contexts/app.context'
import { cancelOrder, getOrders } from 'src/apis/order.api'
import { Order } from 'src/type/order.type'
import { CartDetailType } from 'src/type/cartDetail.type'
import { toast } from 'react-toastify'

interface OrderListProps {
  orders?: Order[]
}

const OrderList: React.FC<OrderListProps> = () => {
  const { profile, isAuthenticated } = useContext(AppContext)
  const queryClient = useQueryClient()
  const [dataOrders, setDataOrders] = useState<Order[]>([])
  const mutationCancelOrder = useMutation({
    mutationFn: (orderId: number) => cancelOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries(['orders', { accountId: profile?.id }])
      toast.success('Hủy đơn thành công')
    }
  })
  const queryOrders = useQuery({
    queryKey: ['orders', { accountId: profile?.id }],
    queryFn: () => getOrders(Number(profile?.id)),
    refetchInterval: 1000,
    select: (data) => data.data,
    enabled: isAuthenticated
  })
  useEffect(() => {
    queryOrders.data && setDataOrders(queryOrders.data)
  }, [queryOrders.data, setDataOrders])
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <FontAwesomeIcon icon={faCheckCircle} className='mr-2 text-green-500' />
      case 'Ordered':
        return <FontAwesomeIcon icon={faHourglassHalf} className='mr-2 text-yellow-500' />
      case 'Delivery':
        return <FontAwesomeIcon icon={faTruck} className='mr-2 text-blue-400 ' />
      case 'Canceled':
        return <FontAwesomeIcon icon={faTimesCircle} className='mr-2 text-red-500' />
      default:
        return null
    }
  }
  const handelCancelOrder = (orderId: number) => {
    mutationCancelOrder.mutate(orderId)
  }
  return (
    <div className='flex flex-col space-y-4'>
      {dataOrders.map((order) => (
        <div key={order.id} className='overflow-hidden rounded-lg bg-white shadow-md'>
          <div className='p-6'>
            <div className='grid grid-cols-3'>
              <div className='col-span-2'>
                <div className='mb-4 flex items-center justify-between'>
                  <span className='flex items-center text-lg font-semibold'>
                    {getStatusIcon(order.status)} {order.status}
                  </span>
                </div>
                <p className='flex items-center text-sm text-gray-600'>
                  <FontAwesomeIcon icon={faCalendarAlt} className='mr-2' />
                  Ordered on: {order.orderDate}
                </p>
                {order.cancellationDate && (
                  <p className='flex items-center text-sm text-gray-600'>
                    <FontAwesomeIcon icon={faTimes} className='mr-2' />
                    Canceled Date: {order.cancellationDate}
                  </p>
                )}
                {order.deliveryDate && (
                  <p className='flex items-center text-sm text-gray-600'>
                    <FontAwesomeIcon icon={faTruck} className='mr-2' />
                    Delivery Date: {order.deliveryDate}
                  </p>
                )}
                {order.finishedDate && (
                  <p className='flex items-center text-sm text-gray-600'>
                    <FontAwesomeIcon icon={faCheck} className='mr-2' />
                    Delivery Date: {order.finishedDate}
                  </p>
                )}

                <p className='flex items-center text-sm text-gray-600'>
                  <FontAwesomeIcon icon={faMoneyBill} className='mr-2' />
                  Payment Status: {order.paymentStatus}
                </p>
              </div>
              <div className='col-span-1 flex items-start justify-end'>
                {order.status == 'Ordered' && (
                  <button className='text-red-500 hover:text-red-700' onClick={() => handelCancelOrder(order.id)}>
                    <FontAwesomeIcon icon={faUndoAlt} className='mr-1' />
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faBox} className='mr-2 text-gray-600' />
              <ul className='list-inside'>
                {order.details.map((detail: Partial<CartDetailType>) => (
                  <li key={detail.id}>
                    <span>{detail.painting?.name}</span> ({detail.qty})
                  </li>
                ))}
              </ul>
            </div>
            <p className='flex items-center text-sm text-gray-600'>
              <span className='mr-2'>Total:</span>${order.total}
            </p>
            <p className='flex items-center text-sm text-gray-600'>
              <span className='mr-2'>Shipping Address:</span>
              {order.shippingAddress}
            </p>
            {order.completionDate && (
              <p className='flex items-center text-sm text-gray-600'>
                <FontAwesomeIcon icon={faCalendarAlt} className='mr-2' />
                Completion Date: {order.completionDate}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default OrderList

import { useContext } from 'react'
import { VnPayIcon } from '../Icons'
import { CartContext } from 'src/contexts/cart.context'

function PaymentMethod() {
  const { payMethod, setPayMethod } = useContext(CartContext)
  return (
    <div>
      <div className='mb-4 flex items-center'>
        <input
          onChange={() => {
            setPayMethod('vnpay')
          }}
          checked={payMethod === 'vnpay'}
          id='vnpay'
          type='radio'
          value='1'
          name='paymentMethod'
          className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 outline-0   dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
        />
        <label htmlFor='vnpay' className='ms-2 flex text-sm font-medium text-gray-900 dark:text-gray-300'>
          <VnPayIcon />
        </label>
      </div>
      <div className='mb-4 flex items-center'>
        <input
          onChange={() => {
            setPayMethod('Pay-on-delivery')
          }}
          id='Pay-on-delivery'
          checked={payMethod === 'Pay-on-delivery'}
          type='radio'
          value='0'
          name='paymentMethod'
          className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700  '
        />
        <label htmlFor='Pay-on-delivery' className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
          Pay on delivery
        </label>
      </div>
    </div>
  )
}

export default PaymentMethod

import { useContext } from 'react'
import OrderSummaryItem from './OrderSummaryItem'
import { CartContext } from 'src/contexts/cart.context'
import { AppContext } from 'src/contexts/app.context'
import { CartDetailType } from 'src/type/cartDetail.type'

function OrderSummary() {
  const { dataShip } = useContext(CartContext)
  const { dataCart } = useContext(AppContext)
  return (
    <>
      <h2 className='my-3 text-base font-bold'>Order Summary</h2>
      <div className='w-full'>
        {dataCart?.details &&
          dataCart?.details.map((item: CartDetailType) => {
            return (
              <OrderSummaryItem
                key={item.painting.id}
                artist={item.painting.artist}
                image={item.painting.thumbnailUrl}
                name={item.painting.name}
                total={item.total}
              />
            )
          })}
      </div>
      <div className='flex w-full flex-col'>
        <p className='mb-[5px] flex items-center justify-between text-xs'>
          <span>Product Cost</span>
          <span>$ {dataCart?.total}</span>
        </p>
        {dataShip.total && (
          <>
            <p className='mb-[5px] flex items-center justify-between text-xs'>
              <span>Shipping</span>
              <span>Included</span>
            </p>
            <p className='mb-[5px] flex items-center justify-between  text-xs'>
              <span className='border-b border-dotted border-gray-204'>Service Fee</span>
              <span>$ {dataShip.service_fee}</span>
            </p>
            <p className='mb-[5px] flex items-center justify-between  text-xs'>
              <span className='border-b border-dotted border-gray-204'>Insurance Fee</span>
              <span>$ {dataShip.insurance_fee}</span>
            </p>
            <p className='mb-[5px] flex items-center justify-between  text-xs'>
              <span className='border-b border-dotted border-gray-204'>Total shipping cost</span>
              <span>$ {dataShip.total}</span>
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default OrderSummary

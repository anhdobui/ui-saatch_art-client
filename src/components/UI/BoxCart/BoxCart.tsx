import ApplyCode from '../ApplyCode'
import CartList from '../CartList'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from 'src/contexts/app.context'
import { CartItemInf } from '../CartItem/CartItem'
import BoxShippingAddress from './BoxShippingAddress'
import Accordion from '../Accordion'
import { CartContext } from 'src/contexts/cart.context'
import PaymentMethod from '../PaymentMethod'

function BoxCart({ className }: { className: string }) {
  const { dataCart } = useContext(AppContext)
  const { isCheckout, dataShip, payMethod } = useContext(CartContext)
  const [dataCartList, setDataCartList] = useState<CartItemInf[]>([])

  useEffect(() => {
    dataCart &&
      dataCart.details &&
      setDataCartList(
        dataCart.details.map((item) => ({
          id: item.id,
          qty: item.qty,
          artist: item.painting.artist,
          name: item.painting.name,
          thumbnailUrl: item.painting.thumbnailUrl,
          topicNames: item.painting.topics.map((topic) => topic.title).join(','),
          total: item.total
        }))
      )
  }, [dataCart, setDataCartList])
  return (
    <div className={`${className} flex flex-col`}>
      <div className='flex justify-between py-2'>
        <h1 className='text-2xl font-bold text-gray-51'>{isCheckout ? 'Checkout' : 'Cart'}</h1>
      </div>
      {isCheckout ? (
        <>
          <Accordion title='In Your Cart' miniDes={dataCart?.details ? `${dataCart?.details.length} item` : ''}>
            <CartList dataCart={dataCartList} />
          </Accordion>
          <Accordion
            title='Shipping Address'
            defauleIsShow={isCheckout}
            miniDes={
              <div className='flex flex-col items-end'>
                <p>{dataShip.address}</p>
                <p>
                  <span>{dataShip.city.name}</span>
                  <span>{`${dataShip.district.name ? `,${dataShip.district.name}` : ''}`}</span>
                  <span>{`${dataShip.ward.name ? `,${dataShip.ward.name}` : ''}`}</span>
                </p>
              </div>
            }
          >
            <BoxShippingAddress />
          </Accordion>
          <Accordion title='Payment Method' miniDes={payMethod}>
            <PaymentMethod />
          </Accordion>
        </>
      ) : (
        <>
          <CartList dataCart={dataCartList} />
          <ApplyCode />
        </>
      )}
    </div>
  )
}

export default BoxCart

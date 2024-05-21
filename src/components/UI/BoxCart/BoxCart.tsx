import { useQuery } from '@tanstack/react-query'
import ApplyCode from '../ApplyCode'
import CartList from '../CartList'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from 'src/contexts/app.context'
import { CartItemInf } from '../CartItem/CartItem'

function BoxCart({ className }: { className: string }) {
  const { dataCart } = useContext(AppContext)
  const [dataCartList, setDataCartList] = useState<CartItemInf[]>([])

  useEffect(() => {
    dataCart &&
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
        <h1 className='text-2xl font-bold text-gray-51'>Cart</h1>
      </div>
      <CartList dataCart={dataCartList} />
      <ApplyCode />
    </div>
  )
}

export default BoxCart

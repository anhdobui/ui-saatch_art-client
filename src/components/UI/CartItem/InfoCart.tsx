import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Close } from '../Icons'
import { deleteCartDetail } from 'src/apis/cartDetail.api'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import ChooseQuantity from '../ChooseQuantity'
interface InfoCartInf {
  name: string
  artist: string
  topicNames: string
  total: number
  id: number
  qty: number
}
function InfoCart({ name, artist, topicNames, total, id, qty }: InfoCartInf) {
  const { profile } = useContext(AppContext)
  const queryClient = useQueryClient()
  const mutationDelete = useMutation({
    mutationFn: (id: number) => deleteCartDetail(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', { accountId: profile?.id }])
    }
  })
  const handleDeleteProductForCart = (idDelete: number) => {
    mutationDelete.mutate(idDelete)
  }
  return (
    <div className='relative flex w-[350px] flex-col'>
      <p className='block max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-base italic'>{name}</p>
      <p className='mb-[5px] block max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-xs '>{artist}</p>
      <p className='mb-[5px] block max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-[10px] '>
        {topicNames}
      </p>

      <div className='my-[10px] flex flex-col'>
        <div className='mb-[5px] flex justify-between text-[10px]'>
          <span>Shipping</span>
          <span>Included</span>
        </div>
        <div className='flex justify-between text-xs font-bold text-gray-51'>
          <span>Artwork Total</span>
          <span>${total}</span>
        </div>
        <div className='absolute right-0 top-0'>
          <button onClick={() => handleDeleteProductForCart(id)} className='opacity-50 duration-200 hover:opacity-80'>
            <Close />
          </button>
        </div>
        <div className=''>
          <span className='text-xs'>Quantity: {qty}</span>
          <ChooseQuantity idCartDetail={id} qty={qty} />
        </div>
      </div>
    </div>
  )
}

export default InfoCart

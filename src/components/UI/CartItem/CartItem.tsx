import ImageCart from './ImageCart'
import InfoCart from './InfoCart'
export interface CartItemInf {
  id: number
  thumbnailUrl: string
  name: string
  artist: string
  topicNames: string
  total: number
  qty: number
}
function CartItem({ thumbnailUrl, name, artist, topicNames, total, id, qty }: CartItemInf) {
  return (
    <div className='max-w-[515px]-col flex border-t border-gray-238 py-[15px]'>
      <ImageCart src={thumbnailUrl} alt={name} className='mr-[15px]' />
      <InfoCart qty={qty} id={id} artist={artist} name={name} topicNames={topicNames} total={total} />
    </div>
  )
}

export default CartItem

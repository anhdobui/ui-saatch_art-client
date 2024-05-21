import CartItem from '../CartItem'
import { CartItemInf } from '../CartItem/CartItem'
interface CartListInf {
  className?: string
  dataCart: CartItemInf[]
}
function CartList({ className, dataCart }: CartListInf) {
  return (
    <div className={`${className ?? ''} flex flex-col`}>
      {dataCart.map((item) => (
        <CartItem
          qty={item.qty}
          key={item.id}
          artist={item.artist}
          id={item.id}
          name={item.name}
          thumbnailUrl={item.thumbnailUrl}
          topicNames={item.topicNames}
          total={item.total}
        />
      ))}
    </div>
  )
}

export default CartList

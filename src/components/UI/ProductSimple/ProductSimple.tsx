import { Link } from 'react-router-dom'
import Image from '../Image'
export type ProductSimpleType = {
  thumbnail: string
  name: string
  auth: string
  price: string
  linkDetail: string
}
function ProductSimple({ auth, linkDetail, name, price, thumbnail }: ProductSimpleType) {
  return (
    <div className='w-full'>
      <Image className='' src={thumbnail} ratio='1:1' />
      <div className='w-full overflow-hidden text-ellipsis text-sm'>
        <Link
          to={linkDetail}
          className='mt-[6px] block  max-w-[207px] overflow-hidden text-ellipsis whitespace-nowrap text-left font-crimson-text text-base leading-[18px] text-gray-700'
        >
          {name}
        </Link>
        <Link
          to={linkDetail}
          className='my-1 block max-w-[207px] overflow-hidden text-ellipsis whitespace-nowrap font-helvetica-text text-xs text-gray-700'
        >
          {auth}
        </Link>
        <p className='overflow-hidden text-ellipsis font-crimson-text text-base text-gray-900'>{price}</p>
      </div>
    </div>
  )
}

export default ProductSimple

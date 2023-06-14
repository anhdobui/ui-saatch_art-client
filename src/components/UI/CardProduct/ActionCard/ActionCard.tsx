import ButtonIcon from '../../ButtonIcon'
import { CartIcon, HeartIcon, PlusIcon } from '../../Icons'

function ActionCard() {
  return (
    <div className='absolute right-[15px] top-[15px] flex opacity-0 transition-opacity delay-0 duration-200 ease-in-out group-hover:opacity-100 '>
      <ButtonIcon icon={<PlusIcon colorClass='fill-gray-51 group-hover/button:fill-blue-custom' />} />
      <ButtonIcon icon={<HeartIcon colorClass='fill-gray-51 group-hover/button:fill-red-custom' />} />
      <ButtonIcon icon={<CartIcon colorClass='fill-gray-51 group-hover/button:fill-green-custom' />} />
    </div>
  )
}

export default ActionCard

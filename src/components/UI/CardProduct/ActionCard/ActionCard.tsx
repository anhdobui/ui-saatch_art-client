import { useContext } from 'react'
import ButtonIcon from '../../ButtonIcon'
import { CartIcon, HeartIcon, PlusIcon } from '../../Icons'
import { AppContext } from 'src/contexts/app.context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPrdToCart } from 'src/apis/cartDetail.api'

function ActionCard({ handleAddCart }: { handleAddCart: () => void }) {
  return (
    <div className='absolute right-0 top-[1%] flex opacity-0 transition-opacity delay-0 duration-200 ease-in-out group-hover:opacity-100 '>
      <ButtonIcon icon={<PlusIcon colorClass='fill-gray-51 group-hover/button:fill-blue-custom' />} />
      <ButtonIcon icon={<HeartIcon colorClass='fill-gray-51 group-hover/button:fill-red-custom' />} />
      <ButtonIcon
        onClick={handleAddCart}
        icon={<CartIcon colorClass='fill-gray-51 group-hover/button:fill-green-custom' />}
      />
    </div>
  )
}

export default ActionCard

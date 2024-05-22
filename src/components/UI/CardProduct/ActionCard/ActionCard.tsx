import { useContext } from 'react'
import ButtonIcon from '../../ButtonIcon'
import { CartIcon, HeartIcon, PlusIcon } from '../../Icons'
import { AppContext } from 'src/contexts/app.context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPrdToCart } from 'src/apis/cartDetail.api'

function ActionCard({ paintingId }: { paintingId: number }) {
  const { isAuthenticated, setIsShowLogin, profile } = useContext(AppContext)
  const queryClient = useQueryClient()
  const mutationCartDetail = useMutation({
    mutationFn: (paintingId: number) => addPrdToCart({ accountId: profile?.id ?? -1, paintingId }),
    onSuccess: () => {
      toast.info('Đã thêm sản phẩm vào giỏ', {
        autoClose: 500
      })
      queryClient.invalidateQueries(['carts', { accountId: profile?.id }])
    }
  })
  const handleCartOnClick = () => {
    if (isAuthenticated) {
      mutationCartDetail.mutate(paintingId)
    } else {
      toast.info('Bạn cần đăng nhập để thực hiện chức năng này', {
        autoClose: 800
      })
      setIsShowLogin(true)
    }
  }
  return (
    <div className='absolute right-0 top-[1%] flex opacity-0 transition-opacity delay-0 duration-200 ease-in-out group-hover:opacity-100 '>
      <ButtonIcon icon={<PlusIcon colorClass='fill-gray-51 group-hover/button:fill-blue-custom' />} />
      <ButtonIcon icon={<HeartIcon colorClass='fill-gray-51 group-hover/button:fill-red-custom' />} />
      <ButtonIcon
        onClick={handleCartOnClick}
        icon={<CartIcon colorClass='fill-gray-51 group-hover/button:fill-green-custom' />}
      />
    </div>
  )
}

export default ActionCard

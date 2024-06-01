import { Link } from 'react-router-dom'
import ActionCard from './ActionCard/ActionCard'
import { ProductType } from 'src/type/app.type'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPrdToCart } from 'src/apis/cartDetail.api'
import { toast } from 'react-toastify'

function CardProduct({ image, name, price, id }: ProductType) {
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
  const handleAddCart = () => {
    if (isAuthenticated) {
      mutationCartDetail.mutate(id)
    } else {
      toast.info('Bạn cần đăng nhập để thực hiện chức năng này', {
        autoClose: 800
      })
      setIsShowLogin(true)
    }
  }
  return (
    <div className='relative mb-[10px] flex w-full min-w-[100%] flex-col justify-start'>
      <div className='group w-[320px]'>
        <div className='relative w-full'>
          <Link to='/' className='block'>
            <img src={image} alt='' className='block h-auto max-h-[100%] w-auto max-w-[100%] bg-gray-204 ' />
          </Link>
          <div className='mb-[10px] mt-5 '>
            <p className='w-full font-crimson-text text-[17px] text-gray-51'>{name}</p>
            <p className='flex text-xs text-gray-102 '>
              <span>Paintings </span>
              <span>, </span>
              <span>70 W x 100 H x 0.2 D cm</span>
            </p>
          </div>
          <div className='flex'>
            <div className='w-[60%]'>
              <div className='mb-[10px]  items-start overflow-hidden text-ellipsis '>
                <p className='flex w-[135%]'>
                  <Link to=''>Manuela Karin Knaut</Link>
                </p>
                <p className='text-xs'>Germany</p>
              </div>
            </div>
            <div className='flex w-[40%] flex-col items-end'>
              <p className='font-crimson-text text-base'>{price || '$1,460'}</p>
            </div>
          </div>
          <button
            onClick={handleAddCart}
            className=' text-21 absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-white bg-opacity-0 text-center font-crimson-text text-white transition-opacity delay-0 duration-200 ease-in-out group-hover:bg-opacity-30'
          ></button>
          <ActionCard handleAddCart={handleAddCart} />
        </div>
      </div>
    </div>
  )
}

export default CardProduct

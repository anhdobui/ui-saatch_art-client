import { Link } from 'react-router-dom'
import ActionCard from './ActionCard/ActionCard'
interface CardProductProps {
  thumbnail: string
}
function CardProduct({ thumbnail }: CardProductProps) {
  return (
    <div className='relative mb-[10px] flex w-full min-w-[100%] flex-col justify-start'>
      <div className='group w-[320px]'>
        <div className='w-full'>
          <Link to='/' className='block'>
            <img src={thumbnail} alt='' className='block h-auto max-h-[100%] w-auto max-w-[100%] bg-gray-204 ' />
          </Link>
          <div className='mb-[10px] mt-5 '>
            <p className='w-full font-crimson-text text-[17px] text-gray-51'>If you can dream it</p>
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
              <p className='font-crimson-text text-base'>$1,460</p>
            </div>
          </div>
        </div>
        <div className=' text-21 absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-white bg-opacity-0 text-center font-crimson-text text-white transition-opacity delay-0 duration-200 ease-in-out group-hover:bg-opacity-30'></div>
        <ActionCard />
      </div>
    </div>
  )
}

export default CardProduct

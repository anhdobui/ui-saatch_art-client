import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

function InfoPayment() {
  const { dataCart } = useContext(AppContext)
  return (
    <div className='flex flex-wrap '>
      <div className='mb-1 flex w-full justify-between font-bold  text-gray-51'>
        <p className='text-[20px] '>Estimated Total</p>
        <p>${dataCart?.total}</p>
      </div>
      <ol className='my-[10px] w-full p-[10px]'></ol>
      <button className='mb-[30px] flex h-[60px] w-full cursor-pointer items-center justify-center bg-green-128-188-48 font-bold text-white'>
        Checkout
      </button>
    </div>
  )
}

export default InfoPayment

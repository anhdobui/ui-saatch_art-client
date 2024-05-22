import { useCallback, useContext, useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateQtyCartDetail } from 'src/apis/cartDetail.api'
import { AppContext } from 'src/contexts/app.context'
import { toast } from 'react-toastify'

function ChooseQuantity({ className, idCartDetail, qty }: { className?: string; idCartDetail: number; qty: number }) {
  const [count, setCount] = useState<number>(1)
  const { profile } = useContext(AppContext)
  const queryClient = useQueryClient()
  const mutationCartDetail = useMutation({
    mutationFn: (qty: number) => updateQtyCartDetail({ cartDetailId: idCartDetail, qty }),
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', { accountId: profile?.id }])
    }
  })
  useEffect(() => {
    setCount(qty)
  }, [setCount, qty])
  const handleDown = () => {
    setCount((prev) => {
      if (prev - 1 >= 1) return prev - 1
      else return prev
    })
  }
  const handleUp = () => {
    setCount((prev) => prev + 1)
  }
  const debounceChooseQuantity = useCallback(
    debounce((nextValue) => {
      mutationCartDetail.mutate(nextValue)
    }, 1000),
    []
  )
  useEffect(() => {
    debounceChooseQuantity(count)
    // Cleanup function to cancel the debounce if the component unmounts
    return () => debounceChooseQuantity.cancel()
  }, [count, debounceChooseQuantity])
  return (
    <div className={`${className}`}>
      <div className='relative flex items-center'>
        <button
          onClick={() => handleDown()}
          type='button'
          id='decrement-button'
          data-input-counter-decrement='counter-input'
          className='inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
        >
          <svg
            className='h-2.5 w-2.5 text-gray-900 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 2'
          >
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M1 1h16' />
          </svg>
        </button>
        <input
          readOnly
          value={count}
          type='number'
          id={idCartDetail.toString()}
          className='max-w-[2.5rem] flex-shrink-0 border-0 bg-transparent text-center text-sm font-normal text-gray-900 focus:outline-none focus:ring-0 dark:text-white'
        />
        <button
          onClick={() => handleUp()}
          type='button'
          id='increment-button'
          data-input-counter-increment='counter-input'
          className='inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
        >
          <svg
            className='h-2.5 w-2.5 text-gray-900 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 18'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 1v16M1 9h16'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ChooseQuantity

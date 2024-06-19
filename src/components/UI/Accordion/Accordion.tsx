import { ReactNode, useEffect, useState } from 'react'

interface AccordionProp {
  children: ReactNode
  title: string
  miniDes?: string | ReactNode
  defauleIsShow?: boolean
}
function Accordion({ children, title, miniDes, defauleIsShow = false }: AccordionProp) {
  const [isShowContent, setIsShowContent] = useState<boolean>(false)
  useEffect(() => {
    setIsShowContent(defauleIsShow)
  }, [setIsShowContent, defauleIsShow])
  return (
    <div>
      <div
        id='accordion-flush'
        data-accordion='collapse'
        data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
        data-inactive-classes='text-gray-500 dark:text-gray-400'
      >
        <h2 id='accordion-flush-heading-1'>
          <button
            onClick={() => {
              setIsShowContent((prev) => !prev)
            }}
            type='button'
            className='flex w-full items-center justify-between gap-3 border-t border-gray-200 py-5 font-medium text-gray-500 rtl:text-right dark:border-gray-700 dark:text-gray-400'
            data-accordion-target='#accordion-flush-body-1'
            aria-expanded='true'
            aria-controls='accordion-flush-body-1'
          >
            <span>{title}</span>
            <div className='flex items-center justify-center'>
              <div className='mr-1 text-xs font-normal'>{miniDes}</div>
              <svg
                data-accordion-icon=''
                className='h-3 w-3 shrink-0 rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5 5 1 1 5'
                />
              </svg>
            </div>
          </button>
        </h2>
        <div
          id='accordion-flush-body-1'
          className={`${!isShowContent && 'hidden'}`}
          aria-labelledby='accordion-flush-heading-1'
        >
          <div className=' border-gray-200  dark:border-gray-700'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Accordion

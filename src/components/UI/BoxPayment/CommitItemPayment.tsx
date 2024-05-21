import { ReactNode } from 'react'
interface CommitItemPaymentInf {
  children?: ReactNode
  title: string
  description: string
}
function CommitItemPayment({ children, title, description }: CommitItemPaymentInf) {
  return (
    <div className='mb-5 flex max-w-[350px] items-start'>
      {children}

      <div className=' flex-col pl-5 text-gray-51'>
        <p className='mb-[5px] font-crimson-text text-base'>{title}</p>
        <p className='text-[10px] leading-[11px]'>{description}</p>
      </div>
    </div>
  )
}

export default CommitItemPayment

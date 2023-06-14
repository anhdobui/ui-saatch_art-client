import { ReactNode } from 'react'

type ButtonIconType = {
  icon?: ReactNode
}
function ButtonIcon({ icon }: ButtonIconType) {
  return (
    <button className='group/button mr-[5px] flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded-full bg-white'>
      {icon}
    </button>
  )
}

export default ButtonIcon

import { ReactNode } from 'react'

type ButtonIconType = {
  icon?: ReactNode
  onClick?: () => void
}
function ButtonIcon({ icon, onClick }: ButtonIconType) {
  return (
    <button
      onClick={onClick}
      className='group/button mr-[5px] flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded-full bg-white'
    >
      {icon}
    </button>
  )
}

export default ButtonIcon

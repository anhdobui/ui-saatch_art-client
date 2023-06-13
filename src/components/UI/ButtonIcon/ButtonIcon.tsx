import { ReactNode } from 'react'

type ButtonIconType = {
  icon?: ReactNode
}
function ButtonIcon({ icon }: ButtonIconType) {
  return <div className=''>{icon}</div>
}

export default ButtonIcon

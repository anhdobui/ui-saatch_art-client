import { ReactNode } from 'react'
import MainLogo from 'src/components/UI/common/Header/MainLogo'
import ContainerSimple from './ContainerSimple'
interface SimpleLayoutInf {
  children: ReactNode
}
function SimpleLayout({ children }: SimpleLayoutInf) {
  return (
    <div className='min-h-screen bg-gray-249'>
      <ContainerSimple className='h-[84px] border-b-[0.8px]  border-solid border-gray-200 bg-white py-[10px]'>
        <MainLogo />
      </ContainerSimple>
      <ContainerSimple className='my-5'>{children}</ContainerSimple>
    </div>
  )
}

export default SimpleLayout

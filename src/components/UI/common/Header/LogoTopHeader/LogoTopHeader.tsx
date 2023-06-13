import { ReactNode } from 'react'
import { PaleLogoSaatchi } from 'src/components/UI/Icons'

function LogoTopHeader({ logoComponent }: { logoComponent: ReactNode }) {
  return (
    <div className='group block border-r border-solid border-gray-300 px-6 py-2.5'>
      <div className='opacity-40 transition-opacity duration-200 ease-in-out group-hover:opacity-100'>
        {logoComponent}
      </div>
    </div>
  )
}

export default LogoTopHeader

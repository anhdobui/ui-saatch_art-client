import { Cart, Favorites, GiftCard, PaleLogoOther, PaleLogoSaatchi } from 'src/components/UI/Icons'
import LogoTopHeader from '../LogoTopHeader'
import ButtonIcon from 'src/components/UI/ButtonIcon'

function TopHeader() {
  return (
    <div className='flex h-[42px] w-full justify-between border-b border-solid border-gray-200'>
      <div className='flex'>
        <LogoTopHeader logoComponent={<PaleLogoSaatchi />} />
        <LogoTopHeader logoComponent={<PaleLogoOther />} />
      </div>
      <div className='flex items-center'>
        <div className='mr-[10px] flex h-[17px] translate-y-[-3%] transform border-b border-solid border-gray-300'>
          <a
            href='/'
            className='flex items-center justify-start border-r-2 border-solid border-gray-700 px-5 pb-1 text-sm font-bold no-underline hover:underline'
          >
            Log In
          </a>
          <a
            href='/'
            className='flex items-center justify-start px-5 pb-1 text-sm font-bold leading-normal text-black no-underline hover:underline'
          >
            Register
          </a>
        </div>
        <div className='mr-[2px] mt-[5px] px-2'>
          <GiftCard />
        </div>
        <div className='mr-2 px-2'>
          <Favorites />
        </div>
        <div className='mr-6 mt-[6px]'>
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default TopHeader

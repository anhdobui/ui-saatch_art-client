import { Cart, Favorites, GiftCard, PaleLogoOther, PaleLogoSaatchi } from 'src/components/UI/Icons'
import LogoTopHeader from '../LogoTopHeader'
import Login from 'src/components/UI/Login'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import BtnLogin from './BtnLogin/BtnLogin'
import Profile from './Profile/Profile'

function TopHeader() {
  const { isShow, isAuthenticated } = useContext(AppContext)
  return (
    <div className='flex h-[42px] w-full justify-between border-b border-solid border-gray-200'>
      {isShow && <Login />}
      <div className='flex'>
        <LogoTopHeader logoComponent={<PaleLogoSaatchi />} />
        <LogoTopHeader logoComponent={<PaleLogoOther />} />
      </div>
      <div className='flex items-center'>
        {isAuthenticated && <Profile />}
        {!isAuthenticated && <BtnLogin />}
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

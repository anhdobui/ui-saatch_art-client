import { Cart, Favorites, GiftCard, PaleLogoOther, PaleLogoSaatchi } from 'src/components/UI/Icons'
import LogoTopHeader from '../LogoTopHeader'
import Auth from 'src/components/UI/Auth'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import BtnLogin from './BtnLogin/BtnLogin'
import Profile from './Profile/Profile'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function TopHeader() {
  const { isShowLogin, setIsShowLogin, isShowRegister, isAuthenticated, dataCart } = useContext(AppContext)
  return (
    <div className='flex h-[42px] w-full justify-between border-b border-solid border-gray-200'>
      {(isShowLogin || isShowRegister) && <Auth />}
      <div className='flex'>
        <LogoTopHeader logoComponent={<PaleLogoSaatchi />} />
        <LogoTopHeader logoComponent={<PaleLogoOther />} />
      </div>
      <div className='flex items-center'>
        <a href='http://localhost:3001/' target='_blank' className='mr-3 font-bold text-gray-51 underline'>
          Dashboard
        </a>

        {isAuthenticated && <Profile />}
        {!isAuthenticated && <BtnLogin />}
        <div className='mr-[2px] mt-[5px] px-2'>
          <GiftCard />
        </div>
        <div className='mr-2 px-2'>
          <Favorites />
        </div>
        <div className='mr-6 mt-[6px]'>
          {isAuthenticated && (
            <Link to={'/user/checkout'} className='relative'>
              <Cart />
              <span className='absolute left-[50%] top-[5%] text-xs text-black'>{dataCart?.details?.length || 0}</span>
            </Link>
          )}
          {!isAuthenticated && (
            <button
              className='relative'
              onClick={() => {
                toast.info('Bạn cần đăng nhập để thực hiện chức năng này', {
                  autoClose: 800
                })
                setIsShowLogin(true)
              }}
            >
              <Cart />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopHeader

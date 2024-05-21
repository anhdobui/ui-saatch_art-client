import { useContext } from 'react'
import GoogleLogin from 'react-google-login'
import { toast } from 'react-toastify'
import { AppContext } from 'src/contexts/app.context'
import { User, UserProfile } from 'src/type/user.type'
import { setProfileToLS } from 'src/utils/auth'

function BtnLoginWithGoogle({ clientId }: { clientId: string }) {
  const { setIsShowLogin, setProfile, setIsAuthenticated } = useContext(AppContext)
  const handleLoginSuccess = (response: any) => {
    console.log(response)
    toast.success('Login success')
    const user: UserProfile = {
      email: response?.profileObj?.email,
      thumbnail: response?.profileObj?.imageUrl,
      username: response?.profileObj?.name,
      id: -1,
      fullname: response?.profileObj?.name
    }
    setProfile(user)
    setProfileToLS(user)
    setIsShowLogin(false)
    setIsAuthenticated(true)
    console.log('Đăng nhập thành công:', response)
  }
  const handleLoginFailure = (error: any) => {
    console.log('Đăng nhập thất bại:', error)
  }
  const renderCustomButton = ({ onClick }: { onClick: () => void }) => {
    return (
      <button
        onClick={onClick}
        className='group h-12 w-full rounded-full border-2 border-gray-300 px-6 transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
      >
        <div className='relative flex items-center justify-center space-x-4'>
          <img
            src='https://tailus.io/sources/blocks/social/preview/images/google.svg'
            className='absolute left-0 w-5'
            alt='google logo'
          />
          <span className='block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base'>
            Continue with Google
          </span>
        </div>
      </button>
    )
  }

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy={'single_host_origin'}
      render={renderCustomButton}
    />
  )
}

export default BtnLoginWithGoogle

/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useContext, useEffect } from 'react'
import { gapi } from 'gapi-script'
import BtnLoginWithGoogle from '../BtnLoginWithGoogle/BtnLoginWithGoogle'
import { AppContext } from 'src/contexts/app.context'
import LoginForm from '../LoginForm/LoginForm'
import Register from '../Register'
const clientId = '632250013050-bjldn4nk31mg68ofl9vits699uemhnbe.apps.googleusercontent.com'

/* eslint-disable jsx-a11y/no-static-element-interactions */
interface LoginInf {
  isLoginGoogle?: boolean
}
function Auth({ isLoginGoogle = true }: LoginInf) {
  const { setIsShowLogin, setIsShowRegister, isShowRegister, isShowLogin } = useContext(AppContext)
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load('client:auth2', start)
  })
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsShowLogin(false)
    setIsShowRegister(false)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <>
      {isLoginGoogle && (
        <div
          className={`fixed bottom-0 left-0 right-0 top-0 z-[9999] bg-gray-100 bg-opacity-30 from-sky-50 to-gray-200  ${
            !isShowLogin && isShowRegister ? 'py-2' : 'py-16'
          }`}
          onClick={handleClick}
        >
          <div className='container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40'>
            <div className='m-auto md:w-8/12 lg:w-6/12 xl:w-6/12'>
              <div onClick={(e) => e.stopPropagation()} className='rounded-xl bg-white shadow-xl'>
                <div className={`p-6 sm:p-16  ${isShowLogin && !isShowRegister ? '' : 'md:py-5'}`}>
                  {isShowLogin && !isShowRegister && (
                    <div className='space-y-4'>
                      <h2 className='mb-8 text-2xl font-bold text-cyan-900'>Welcome to Saatchi Art</h2>
                    </div>
                  )}

                  <div className={`${isShowLogin && !isShowRegister ? 'mt-16' : ''}  grid space-y-4`}>
                    {isShowLogin && !isShowRegister && (
                      <>
                        <BtnLoginWithGoogle clientId={clientId} />
                        <LoginForm />
                      </>
                    )}
                    {!isShowLogin && isShowRegister && <Register />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Auth

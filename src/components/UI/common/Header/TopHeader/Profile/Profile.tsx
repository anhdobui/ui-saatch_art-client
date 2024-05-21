/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext, useState } from 'react'
import { AppContext } from 'src/contexts/app.context'
import { clearLS } from 'src/utils/auth'

function Profile() {
  const { profile } = useContext(AppContext)
  const [isShowDrop, setIsShowDrop] = useState(false)
  const { setIsAuthenticated, setDataCart } = useContext(AppContext)
  const handleLogout = () => {
    setDataCart(null)
    setIsShowDrop(false)
    clearLS()
    setIsAuthenticated(false)
  }
  return (
    <>
      <>
        <div className='relative mr-6 flex flex-col'>
          <div className='flex items-center space-x-4'>
            <div
              className='relative cursor-pointer'
              onClick={(e) => setIsShowDrop((prev) => !prev)}
              onKeyDown={(e) => e.preventDefault()}
            >
              <img className='h-10 w-10 rounded-full' src={profile?.thumbnail} alt='' />
              <span className='absolute left-7 top-0  h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800'></span>
            </div>
            <div className='font-medium dark:text-white'>
              <div>{profile?.fullname}</div>
              <div className='text-sm text-gray-500 dark:text-gray-400'>{profile?.email}</div>
            </div>
          </div>
          <div
            id='userDropdown'
            className={`z-10 ${
              !isShowDrop && 'hidden'
            } absolute top-[100%] w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700`}
          >
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='avatarButton'>
              <li>
                <span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                  Settings
                </span>
              </li>
              <li>
                <span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                  Profile
                </span>
              </li>
            </ul>

            <div className='py-1'>
              <button
                onClick={(e) => handleLogout()}
                className='block w-full px-4  py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default Profile

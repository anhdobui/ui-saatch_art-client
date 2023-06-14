import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

function BtnLogin() {
  const { setIsShow } = useContext(AppContext)
  return (
    <>
      <div className='mr-[10px] flex h-[17px] translate-y-[-3%] transform border-b border-solid border-gray-300'>
        <button
          onClick={() => setIsShow(true)}
          className='flex items-center justify-start border-r-2 border-solid border-gray-700 px-5 pb-1 text-sm font-bold no-underline hover:underline'
        >
          Log In
        </button>
        <a
          href='/'
          className='flex items-center justify-start px-5 pb-1 text-sm font-bold leading-normal text-black no-underline hover:underline'
        >
          Register
        </a>
      </div>
    </>
  )
}

export default BtnLogin

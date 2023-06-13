import { useEffect, useState } from 'react'
import { UpIcon } from 'src/components/UI/Icons'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='flex min-w-[600px] flex-col justify-between font-helvetica-text '>
      <div className='border border-solid border-gray-233'></div>
      <button
        onClick={scrollToTop}
        className='-mt-[15px] flex h-[28px] w-[150px] cursor-pointer items-center justify-center self-center border border-solid border-gray-233 bg-white py-2 text-center text-[10px] text-gray-51 hover:bg-gray-233'
      >
        <UpIcon className='mr-[10px]' />
        BACK TO TOP
      </button>
    </div>
  )
}

export default BackToTop

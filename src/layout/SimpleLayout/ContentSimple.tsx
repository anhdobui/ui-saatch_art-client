import { ReactNode } from 'react'
import Sidebar from 'src/components/UI/Sidebar'

function ContentSimple({
  title,
  isShowSidebar = true,
  children
}: {
  title?: string
  isShowSidebar?: boolean
  children: ReactNode
}) {
  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        {title && <h1 className='mb-8 text-center text-3xl font-bold'>{title}</h1>}
        <div className='relative  rounded-lg '>
          {isShowSidebar && <Sidebar />}
          {children}
        </div>
      </div>
    </>
  )
}

export default ContentSimple

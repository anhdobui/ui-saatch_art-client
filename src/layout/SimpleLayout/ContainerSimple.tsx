import { ReactNode } from 'react'

function ContainerSimple({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`${className ?? ''} flex  items-center justify-center  `}>
      <div className=' w-[1000px] justify-start px-[25px]'>{children}</div>
    </div>
  )
}

export default ContainerSimple

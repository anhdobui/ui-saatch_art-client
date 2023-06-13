import { Link } from 'react-router-dom'
import classNames from 'classnames'

interface TitlePaneProps {
  title: string
  titleConnect: string
  linkConnect: string
  className?: string
}
function TitlePanel({ linkConnect, title, titleConnect, className }: TitlePaneProps) {
  return (
    <div className='mb-[15px] mt-[55px] flex w-full items-end justify-between'>
      <h2
        className={classNames('self-start font-crimson-text text-[40px] text-gray-700', {
          [className as string]: className
        })}
      >
        {title}
      </h2>
      <Link
        to={linkConnect}
        className='my-6 flex self-start font-helvetica-text text-[14px] font-bold uppercase text-gray-700 underline'
      >
        {titleConnect}
      </Link>
    </div>
  )
}

export default TitlePanel

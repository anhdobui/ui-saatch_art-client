import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { TagType } from 'src/type/app.type'
interface TagProps {
  className?: string
  size?: 'normal' | 'large'
}
type TypeProps = TagProps & TagType
function Tag({ tagName, link, size = 'normal', className }: TypeProps) {
  return (
    <Link
      to={link}
      className={classNames('border border-solid border-gray-500 font-helvetica-text text-sm font-bold text-gray-700', {
        [className as string]: className,
        'px-4 pb-[14px] pt-[13px]': size === 'normal',
        'ml-5 flex h-[60px] w-full min-w-[100px] items-center justify-center': size === 'large'
      })}
    >
      {tagName}
    </Link>
  )
}

export default Tag

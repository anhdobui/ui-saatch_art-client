import classNames from 'classnames'
import ThumbnailStory from '../../HomeUI/Story/ThumbnailStory'
import { Link } from 'react-router-dom'
interface ItemFeaturedInfc {
  thumbnail: string
  className?: string
  path: string
  titleConnect: string
  description: string
  title: string
}
function ItemFeatured({ thumbnail, className, path, titleConnect, description, title }: ItemFeaturedInfc) {
  return (
    <div className={classNames('w-full', { [className as string]: className })}>
      <ThumbnailStory src={thumbnail} />
      <h2 className='my-[15px] font-crimson-text text-[44px]'>{title}</h2>
      <h3 className='mb-5 mt-[10px] font-helvetica-text text-[22px]'>{description}</h3>
      <Link to={path}>
        <p className='mt-2 font-crimson-text text-[14px] font-bold uppercase tracking-[0.7] text-gray-700 underline'>
          {titleConnect}
        </p>
      </Link>
    </div>
  )
}

export default ItemFeatured

import InfoStory from './InfoStory'
import ThumbnailStory from './ThumbnailStory'
import classNames from 'classnames'

interface StoryInfc {
  title: string
  thumbnail: string
  alt?: string
  path: string
  titleConnect: string
  thumbnailRatio?: '1:1' | '3:4' | '4:3' | '16:9'
  className?: string
}
function Story({ title, path, thumbnail, titleConnect, alt, thumbnailRatio = '1:1', className }: StoryInfc) {
  return (
    <div
      className={classNames('flex w-[400px] flex-col', {
        [className as string]: className
      })}
    >
      <ThumbnailStory src={thumbnail} ratio={thumbnailRatio} alt={alt} />
      <InfoStory path={path} title={title} titleConnect={titleConnect} />
    </div>
  )
}

export default Story

import Image from 'src/components/UI/Image'
interface ThumbnailStoryInfc {
  src: string
  alt?: string
  className?: string
  ratio?: '1:1' | '3:4' | '4:3' | '16:9'
}
function ThumbnailStory({ src, alt, className, ratio = '1:1' }: ThumbnailStoryInfc) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} ratio={ratio} />
    </div>
  )
}

export default ThumbnailStory

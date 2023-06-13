import classNames from 'classnames'
interface ImageInfc {
  src: string
  alt?: string
  className?: string
  ratio?: '1:1' | '3:4' | '4:3' | '16:9'
}
function Image({ src, alt, className, ratio = '1:1' }: ImageInfc) {
  return (
    <div className={classNames({ [className as string]: className })}>
      <div
        className={classNames('relative w-full', {
          'pb-[100%]': ratio === '1:1',
          'pb-[133.33%]': ratio === '3:4',
          'pb-[75%]': ratio === '4:3',
          'pb-[56.25%]': ratio === '16:9'
        })}
      >
        <img src={src} alt={alt} className='absolute h-full w-full object-cover' />
      </div>
    </div>
  )
}

export default Image

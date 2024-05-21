interface ImageCartInf {
  src?: string
  alt?: string
  className?: string
}
function ImageCart({
  src = 'https://images.saatchiart.com/saatchi/283853/art/2990324/2060217-JIWWEIBB-6.jpg',
  alt = 'backup',
  className
}: ImageCartInf) {
  return (
    <div className={`${className ?? ''} flex max-h-[200px] min-h-[150px] min-w-[150px] items-start`}>
      <img className='h-full w-full  max-w-[150px]  cursor-pointer object-cover' src={src} alt={alt} />
    </div>
  )
}

export default ImageCart

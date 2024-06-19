function OrderSummaryItem({
  image,
  name,
  artist,
  total
}: {
  image: string
  name: string
  artist: string
  total: number | string
}) {
  return (
    <div className='mb-[10px] flex w-full border-b border-gray-238 pb-[10px] '>
      <div className='mr-[15px] flex h-[60px] w-[60px] items-start justify-center'>
        <img className='h-auto max-h-[60px] w-auto max-w-[60px] cursor-pointer' src={image} alt={name} />
      </div>
      <div className='flex max-w-[240px] flex-1 flex-col'>
        <p className='overflow-hidden text-ellipsis whitespace-nowrap font-crimson-text text-sm italic'>{name}</p>
        <p className='mb-[5px] max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-[10px]'>{artist}</p>
        <div className='flex justify-between text-xs font-bold'>
          <span>Artwork Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummaryItem

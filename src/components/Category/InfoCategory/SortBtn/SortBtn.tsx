import { DownIcon, SortIcon } from 'src/components/UI/Icons'

function SortBtn() {
  return (
    <div className='my-[14px] ml-[10px]'>
      <div className='relative flex h-[38px] min-w-[180px] cursor-pointer border border-solid border-gray-204 bg-white pb-[5px] pl-[10px] pt-[10px] text-[14px]'>
        <SortIcon className='mr-[5px]' />
        <div className='mr-[5px] text-left font-helvetica-text text-base'>Sort</div>
        <DownIcon className='absolute right-[10px] top-[50%] w-4 translate-y-[-50%] ' />
      </div>
    </div>
  )
}

export default SortBtn

import { DownIcon, SearchIcon } from 'src/components/UI/Icons'

function Search() {
  return (
    <div className='flex h-10 w-[280px] items-center justify-between border border-solid border-gray-200'>
      <div className='flex h-full items-center border-r border-gray-200 px-[13px] py-[10px]'>
        <DownIcon />
      </div>
      <input type='text' className='flex-grow pb-[5px] pl-[10px] pr-[5px] pt-[10px] outline-0' placeholder='Art' />
      <div className='mr-[10px]'>
        <SearchIcon />
      </div>
    </div>
  )
}

export default Search

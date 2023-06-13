import MainLogo from '../MainLogo'
import Nav from '../Nav'
import Search from '../Search'

function BottomHeader() {
  return (
    <div className='flex h-[76px] items-center justify-between border border-solid border-gray-200 px-[25px]'>
      <MainLogo />
      <Nav />
      <Search />
    </div>
  )
}

export default BottomHeader

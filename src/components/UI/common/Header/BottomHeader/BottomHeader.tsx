import { useQuery } from '@tanstack/react-query'
import MainLogo from '../MainLogo'
import Nav from '../Nav'
import Search from '../Search'
import { getCategory } from 'src/apis/artwork.api'
import { CategoryNav } from 'src/type/category'

function BottomHeader() {
  const query = useQuery({ queryKey: ['category'], queryFn: getCategory })
  const data =
    query?.data?.data.data.listResult &&
    (query?.data?.data.data.listResult as CategoryNav[]).map((item) => ({
      id: item.id,
      name: item.name,
      code: item.code
    }))
  console.log(data)
  return (
    <div className='flex h-[76px] items-center justify-between border border-solid border-gray-200 px-[25px]'>
      <MainLogo />
      <Nav dataNav={data} />
      <Search />
    </div>
  )
}

export default BottomHeader

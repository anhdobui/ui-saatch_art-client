import { useQuery } from '@tanstack/react-query'
import MainLogo from '../MainLogo'
import Nav from '../Nav'
import Search from '../Search'
import { getTopics } from 'src/apis/topic.api'
import { useEffect, useState } from 'react'
import { TopicNav } from 'src/type/topic'

function BottomHeader() {
  const [dataNav, setDataNav] = useState<TopicNav[]>([])
  const query = useQuery({ queryKey: ['topics'], queryFn: getTopics, select: (data) => data.data })
  useEffect(() => {
    const data = query.data
      ? query.data.map((item) => ({
          id: item.id,
          title: item.title
        }))
      : []
    query.data && setDataNav(data)
  }, [query.data, setDataNav])
  return (
    <div className='flex h-[76px] items-center justify-between border border-solid border-gray-200 px-[25px]'>
      <MainLogo />
      <Nav dataNav={dataNav} />
      <Search />
    </div>
  )
}

export default BottomHeader

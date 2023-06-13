import TitleStory from '../TitleStory'
import { Link } from 'react-router-dom'
interface InfoStoryInfc {
  title: string
  path: string
  titleConnect: string
}
function InfoStory({ path, title, titleConnect }: InfoStoryInfc) {
  return (
    <div className='mt-[30px] w-full text-center text-[14px]'>
      <TitleStory title={title} />
      <Link to={path}>
        <p className='mt-2 font-crimson-text text-[14px] font-bold uppercase tracking-[0.7] text-gray-700 underline'>
          {titleConnect}
        </p>
      </Link>
    </div>
  )
}

export default InfoStory

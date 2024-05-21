import { Link } from 'react-router-dom'
import { TopicNav } from 'src/type/topic'

type NavType = {
  dataNav: TopicNav[]
}
function Nav({ dataNav }: NavType) {
  return (
    <ul className='flex'>
      {dataNav &&
        dataNav.map((item) => (
          <li key={item.id}>
            <Link
              to={`/${encodeURIComponent(`${item.title}-#-${item.id}`)}`}
              className='px-2 text-sm font-bold text-gray-700'
            >
              {item.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Nav

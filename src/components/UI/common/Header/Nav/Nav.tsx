import { Link } from 'react-router-dom'
import { CategoryNav } from 'src/type/category'

type NavType = {
  dataNav: CategoryNav[]
}
function Nav({ dataNav }: NavType) {
  return (
    <ul className='flex'>
      {dataNav &&
        dataNav.map((item) => (
          <li key={item.id}>
            <Link to={`/image___${item.id}`} className='px-2 text-sm font-bold text-gray-700'>
              {item.name}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Nav

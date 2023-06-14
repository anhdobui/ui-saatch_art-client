import { Link } from 'react-router-dom'

interface BreadcrumbProps {
  name: string
  path: string
}
function Breadcrumb({ name, path }: BreadcrumbProps) {
  return (
    <div className='mt-[10px] h-auto min-h-[36px] w-[90vw] max-w-[1060px] py-[10px] text-[13px] '>
      <ul className='flex h-4 max-w-[700px] justify-start'>
        <li>
          <Link to='/all' className='text-gray-102 '>
            All Artworks
          </Link>
        </li>
        <li className='mx-2'>/</li>
        <li>
          <Link to={path} className='text-gray-102 '>
            {name}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Breadcrumb

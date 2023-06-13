type NavType = {
  items?: string[]
}
const init = ['Paintings', 'Photography', 'Drawings', 'Sculpture', 'Digital', 'Prints', 'Inspiration', 'Art Advisory']
function Nav({ items = init }: NavType) {
  return (
    <ul className='flex'>
      {items.map((item) => (
        <li key={item}>
          <a href='/' className='px-2 text-sm font-bold text-gray-700'>
            {item}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Nav

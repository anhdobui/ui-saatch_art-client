import { Link } from 'react-router-dom'
import { Logo } from 'src/components/UI/Icons'

function MainLogo() {
  return (
    <Link to='/' className='block'>
      <Logo />
    </Link>
  )
}

export default MainLogo

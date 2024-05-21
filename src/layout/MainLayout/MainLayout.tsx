import { ReactNode } from 'react'
import Login from 'src/components/UI/Auth'
import Footer from 'src/components/UI/common/Footer'
import Header from 'src/components/UI/common/Header'

interface Props {
  children?: ReactNode
}
function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout

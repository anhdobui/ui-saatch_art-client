import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@fontsource/crimson-text'
import { useQuery } from '@tanstack/react-query'
import { getCartByAccId } from './apis/cart.api'
import { useContext, useEffect } from 'react'
import { AppContext } from './contexts/app.context'

function App() {
  const routeElements = useRouteElements()
  const { profile, isAuthenticated, setDataCart } = useContext(AppContext)
  const queryCart = useQuery({
    queryKey: ['carts', { accountId: profile?.id }],
    queryFn: () => getCartByAccId(Number(profile?.id)),
    select: (data) => data.data,
    enabled: isAuthenticated
  })
  useEffect(() => {
    queryCart.data && setDataCart(queryCart.data)
  }, [queryCart.data])
  return (
    <div className='App'>
      <ToastContainer />
      {routeElements}
    </div>
  )
}

export default App

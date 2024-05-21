import { useContext, useEffect } from 'react'
import BoxCart from '../UI/BoxCart'
import BoxPayment from '../UI/BoxPayment'
import Grid from '../UI/Grid'
import { AppContext } from 'src/contexts/app.context'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Cart() {
  const { dataCart, isAuthenticated, setIsShowLogin } = useContext(AppContext)
  if (!isAuthenticated) {
    setIsShowLogin(true)
    toast.info('Bạn cần đăng nhập để thực hiện chức năng này', {
      autoClose: 500
    })
    return <Navigate to='/' />
  }
  return (
    <Grid cols={5} className='gap-[50px]'>
      <BoxCart className='col-span-3 bg-white p-[15px]' />
      <BoxPayment className='col-span-2 h-min bg-white p-[15px]' />
    </Grid>
  )
}

export default Cart

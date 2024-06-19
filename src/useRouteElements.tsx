import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Category from './pages/Category/Category'
import Cart from './components/Cart'
import SimpleLayout from './layout/SimpleLayout'
import OrderList from './components/OrderList'
import UserProfile from './components/UserProfile'
import Bill from './components/Bill'
import CartPage from './pages/Cart/CartPage'
import MessagePage from './pages/MessagePage'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: 'message',
      element: (
        <MainLayout>
          <MessagePage />
        </MainLayout>
      )
    },
    {
      path: '/user',
      element: <Outlet />,
      children: [
        {
          path: 'profile',
          element: (
            <SimpleLayout title='User Profile'>
              <UserProfile />
            </SimpleLayout>
          )
        },
        {
          path: 'order-list',
          element: (
            <SimpleLayout title='Order List'>
              <OrderList />
            </SimpleLayout>
          )
        },
        {
          path: 'checkout',
          element: (
            <SimpleLayout isShowSidebar={false}>
              <CartPage />
            </SimpleLayout>
          )
        },

        {
          path: 'bill',
          element: (
            <SimpleLayout isShowSidebar={false}>
              <Bill />
            </SimpleLayout>
          )
        }
      ]
    },

    {
      path: '/:topic',
      element: (
        <MainLayout>
          <Category />
        </MainLayout>
      )
    }
  ])
  return routeElements
}

export default useRouteElements

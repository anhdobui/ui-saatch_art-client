import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Category from './pages/Category/Category'
import Cart from './components/Cart'
import SimpleLayout from './layout/SimpleLayout'
import OrderList from './components/OrderList'
import UserProfile from './components/UserProfile'
import User from './pages/User'
import Bill from './components/Bill'

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
              <Cart />
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

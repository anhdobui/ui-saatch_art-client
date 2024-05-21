import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Category from './pages/Category/Category'
import Cart from './components/Cart'
import SimpleLayout from './layout/SimpleLayout'
import { useContext, useEffect } from 'react'
import { AppContext } from './contexts/app.context'

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
      path: '/checkout',
      element: (
        <SimpleLayout>
          <Cart />
        </SimpleLayout>
      )
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

import { useRoutes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Category from './pages/Category/Category'
import Login from './components/UI/Login'

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
      path: '/:category',
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

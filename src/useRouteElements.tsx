import { useRoutes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    }
  ])
  return routeElements
}

export default useRouteElements

import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const routeElements = useRouteElements()
  return (
    <div className='App'>
      <ToastContainer />
      {routeElements}
    </div>
  )
}

export default App

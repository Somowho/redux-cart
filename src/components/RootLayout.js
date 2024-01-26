import NavBar from './NavBarPanel'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux' 
import store from './store/store'

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>  {/*We made the redux state accessible to all components */}
    <NavBar />

    <main>
    <Outlet />
    </main> 
    </Provider> {/*We made the redux state accessible to all components */}

    </>
  )
}

export default RootLayout
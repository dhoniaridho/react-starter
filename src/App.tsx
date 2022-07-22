import routes from '~react-pages'
import ReactQueryProvider from './modules/react-query'
import 'nprogress/nprogress.css'
import { HeadProvider } from './modules/head'
import NProgress from './modules/n-progress'

const App = () => {
  return (
    <ReactQueryProvider>
      <HeadProvider>
        <NProgress>{useRoutes(routes)}</NProgress>
      </HeadProvider>
    </ReactQueryProvider>
  )
}
export default App

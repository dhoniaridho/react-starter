import { Suspense } from 'react'
import routes from '~react-pages'
import ReactQueryProvider from './modules/react-query'

const App = () => {
  return (
    <ReactQueryProvider>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </ReactQueryProvider>
  )
}
export default App

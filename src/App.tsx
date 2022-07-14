import { Suspense } from 'react'
import routes from '~react-pages'

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}
export default App

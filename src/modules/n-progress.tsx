import nProgress from 'nprogress'
import { Suspense } from 'react'

interface Props {
  children: React.ReactNode
}

const NProgress = ({ children }: Props) => {
  const location = useLocation()

  useEffect(() => {
    nProgress.start()
    nProgress.done()
  }, [location])

  const LazyLoad = () => {
    useEffect(() => {
      nProgress.start()

      return () => {
        nProgress.done()
      }
    })

    return <></>
  }
  return <Suspense fallback={<LazyLoad />}>{children}</Suspense>
}

export default NProgress

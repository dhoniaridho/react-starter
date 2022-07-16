import { Helmet } from 'react-helmet'

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="main-layout">{children}</div>
    </>
  )
}

export default MainLayout

interface Props {
  children: React.ReactNode
}

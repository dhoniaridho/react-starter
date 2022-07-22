const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className="main-layout">{children}</div>
    </>
  )
}

export default MainLayout

interface Props {
  children: React.ReactNode
}

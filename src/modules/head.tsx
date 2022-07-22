import { Helmet, HelmetProvider } from 'react-helmet-async'

interface Props {
  children: React.ReactNode
}

export function HeadProvider({ children }: Props) {
  return <HelmetProvider>{children}</HelmetProvider>
}

export default function Head({ children }: Props) {
  return <Helmet>{children}</Helmet>
}

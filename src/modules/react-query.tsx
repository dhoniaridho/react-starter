import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function ReactQueryProvider({ children }: Props) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

interface Props {
  children: React.ReactNode
}

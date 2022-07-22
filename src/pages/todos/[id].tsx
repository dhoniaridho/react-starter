import Head from '@/modules/head'
import TodoRepository from '@features/todos/repositories/todo.repository'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const TodoDetail = () => {
  const { id } = useParams()

  const {
    data: todoData,
    isLoading: isLoadingTodos,
    isError: isErrorTodos,
  } = useQuery(['todo', id], ({ queryKey }) => {
    return TodoRepository.getById(Number(queryKey[1]))
  })

  if (isErrorTodos) {
    return <p>Error</p>
  }

  if (isLoadingTodos) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Head>
        <title>{todoData?.title} - Vite + React</title>
      </Head>
      <h1>Todo ID {id}</h1>
      <p>{todoData?.title}</p>
      <Link to="/todos">Back</Link>
    </div>
  )
}
export default TodoDetail

import TodoRepository from '@features/todos/repositories/todo.repository'
import { useQuery } from 'react-query'
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
      <h1>Todo ID {id}</h1>
      <p>{todoData?.title}</p>
      <Link to="/todos">Back</Link>
    </div>
  )
}
export default TodoDetail

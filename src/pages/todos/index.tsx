import MainLayout from '@/layouts/main-layout'
import { useQuery } from 'react-query'
import TodoRepository from '@features/todos/repositories/todo.repository'
import { Link } from 'react-router-dom'

const Todos = () => {
  const {
    data: todos,
    isError: isErrorTodos,
    isLoading: isLoadingTodos,
  } = useQuery('todos', TodoRepository.getAll)

  if (isErrorTodos) {
    return <p>Error</p>
  }

  if (isLoadingTodos) {
    return <p>Loading...</p>
  }

  return (
    <MainLayout>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

export default Todos

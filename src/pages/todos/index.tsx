import MainLayout from '@/layouts/main-layout'
import { useQuery } from 'react-query'
import TodoRepository from '@/app/todos/repositories/todo.repository'

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
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </MainLayout>
  )
}

export default Todos

import { Suspense } from 'react'
import { useQuery } from 'react-query'
import TodoRepository from './repositories/todo.repository'

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
    <Suspense>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </Suspense>
  )
}

export default Todos

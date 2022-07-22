import MainLayout from '@/layouts/main-layout'
import { useQuery } from '@tanstack/react-query'
import TodoRepository from '@features/todos/repositories/todo.repository'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'

const Todos = () => {
  const {
    data: todos,
  } = useQuery(['todos'], TodoRepository.getAll, { suspense: true })

  return (
    <MainLayout>
      <Suspense fallback={<>loading</>}>
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </MainLayout>
  )
}

export default Todos

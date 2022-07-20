import axios from 'axios'
import Todo from '../models/todo'

const TodoRepository = {
  async getAll() {
    const { data: response } = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    )
    return response
  },
  async getById(id: number) {
    const { data: response } = await axios.get<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    )
    return response
  },
}

export default TodoRepository

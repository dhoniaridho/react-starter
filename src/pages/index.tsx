import SvgIcon from '@/components/icons'
import useStore from '@/stores/counter'
import { Link } from 'react-router-dom'

const Index = () => {
  const { count, increase, decrease } = useStore((state) => state)

  return (
    <div className="App" style={{ marginInline: 'auto' }}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <SvgIcon name="react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Descrease</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to="/todos">Todos</Link>
    </div>
  )
}

export default Index

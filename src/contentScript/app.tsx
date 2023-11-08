import { Counter } from '../TestComponent'

export function App() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: 400,
        height: 300,
        background: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid black',
        zIndex: 99,
      }}
    >
      <Counter />
    </div>
  )
}

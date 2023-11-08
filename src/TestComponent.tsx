import { useSubscribe } from 'replicache-react'
import { rep } from './replicache'

function uid() {
  return Math.random().toString(5).slice(2)
}

export function Counter() {
  const list = useSubscribe(rep, (tx) => tx.scan({ prefix: 'items/' }).values().toArray(), [], [])

  function handleClick() {
    const id = uid()
    rep.mutate.addItem({ id })
  }

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      list length: {list.length}
      <button onClick={handleClick}>add item</button>
    </div>
  )
}

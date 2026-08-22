import { useState } from 'react'

function NameInput() {
  const [name, setName] = useState('')

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h2>Hello, {name || 'Stranger'}!</h2>
    </div>
  )
}
export default NameInput
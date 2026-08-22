import { useState } from 'react'

function ToggleMessage() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Message
      </button>
      {visible && <p>This is a toggled message!</p>}
    </div>
  )
}
export default ToggleMessage
import { useState } from 'react'

function CheckboxExample() {
  const [checked, setChecked] = useState(false)
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      Accept terms
    </label>
  )
}

export default CheckboxExample
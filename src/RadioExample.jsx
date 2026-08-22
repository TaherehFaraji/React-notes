import { useState } from 'react'


function RadioExample() {
  const [color, setColor] = useState('red')
  return (
    <fieldset>
      <legend>Choose color:</legend>
      <label>
        <input type="radio" name="color" value="red" checked={color === 'red'} onChange={(e) => setColor(e.target.value)} /> Red
      </label>
      <label>
        <input type="radio" name="color" value="blue" checked={color === 'blue'} onChange={(e) => setColor(e.target.value)} /> Blue
      </label>
      <p>Selected: {color}</p>
    </fieldset>
  )
}

export default RadioExample
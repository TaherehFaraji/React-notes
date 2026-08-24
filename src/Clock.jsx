import { useState, useEffect } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // cleanup function
    return () => clearInterval(intervalId)
  }, []) // empty array – set up only once

  return <h2>{time.toLocaleTimeString()}</h2>
}
export default Clock
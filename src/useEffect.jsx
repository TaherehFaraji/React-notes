
import { useEffect } from 'react'

useEffect(() => {
    // code runs after every render (or on specific changes)
})

useEffect(() => {
    console.log('Component rendered or updated')
})

useEffect(() => {
    console.log('Component rendered or updated')
})

useEffect(() => {
    console.log('Component mounted')
}, [])

useEffect(() => {
    document.title = `You clicked ${count} times`
}, [count])
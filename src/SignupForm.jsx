
import { useState } from 'react'

function SignupForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', form)
    alert(`Welcome, ${form.username}!`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Sign up</button>
    </form>
  )
}
export default SignupForm
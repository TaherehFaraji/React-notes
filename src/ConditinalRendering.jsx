// if/else outside JSX
function StatusMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>
  } else {
    return <p>Please log in.</p>
  }
}
// Ternary operator inside JSX
function Greeting({ user }) {
  return (
    <h2>{user ? `Hello, ${user.name}` : 'Hello, Guest'}</h2>
  )
}

// Logical && (short‑circuit)
function Notification({ message }) {
  return (
    <div>
      {message && <div className="alert">{message}</div>}
    </div>
  )
}
// Warning: ensure the left side is a boolean. If message could be 0 or '', the number 0 or empty string will render. Better: {!!message && ...} or {message.length > 0 && ...}
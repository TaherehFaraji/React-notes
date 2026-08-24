
import { useState } from 'react'

function AuthToggle() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div>
            <button onClick={() => setLoggedIn(!loggedIn)}>
                {loggedIn ? 'Log out' : 'Log in'}
            </button>
            {loggedIn ? (
                <div>
                    <h3>User Dashboard</h3>
                    <p>Secret data only for logged‑in users.</p>
                </div>
            ) : (
                <p>You are not logged in. Please log in.</p>
            )}
        </div>
    )
}

export default AuthToggle
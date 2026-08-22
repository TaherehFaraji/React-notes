
import { useState } from 'react'

function BalanceDisplay({ balance }) {
  return <p>Current balance: ${balance}</p>
}

function AddMoneyButton({ onAdd }) {
  return <button onClick={() => onAdd(10)}>Add $10</button>
}

function Wallet() {
  const [balance, setBalance] = useState(100)

  const addMoney = (amount) => {
    setBalance(balance + amount)
  }

  return (
    <div>
      <BalanceDisplay balance={balance} />
      <AddMoneyButton onAdd={addMoney} />
    </div>
  )
}
export default Wallet
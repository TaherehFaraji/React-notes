function ItemList() {
  const items = ['React', 'Vue', 'Angular']

  const handleItemClick = (item) => {
    alert(`You selected: ${item}`)
  }

  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          <button onClick={() => handleItemClick(item)}>{item}</button>
        </li>
      ))}
    </ul>
  )
}
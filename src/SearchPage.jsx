
import { useState } from 'react'

function SearchInput({ search, onSearchChange }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search..."
    />
  )
}

function SearchResult({ search }) {
  return <p>{search ? `Results for: "${search}"` : 'No search term'}</p>
}

function SearchPage() {
  const [search, setSearch] = useState('')

  return (
    <div>
      <h2>Search</h2>
      <SearchInput search={search} onSearchChange={setSearch} />
      <SearchResult search={search} />
    </div>
  )
}
export default SearchPage
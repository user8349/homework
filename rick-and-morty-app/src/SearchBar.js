import './SearchBar.css';
import {useEffect, useState} from "react";

function SearchBar({ query, queryChange }) {
  const [localQuery, setLocalQuery] = useState('');
  useEffect(() => {
    setLocalQuery(query);
  }, [query]);
  return (
    <div className="search-bar">
      <label htmlFor="search">Поиск персонажа</label>
      <div className="row">
        <input type="text" id="search" value={localQuery} onChange={event => setLocalQuery(event.target.value)}></input>
        <button type="button" onClick={() => queryChange(localQuery)}>Поиск</button>
      </div>
    </div>
  );
}

export default SearchBar;

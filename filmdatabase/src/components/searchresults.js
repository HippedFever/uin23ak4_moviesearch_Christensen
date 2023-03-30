import React, { useState } from 'react'


function SearchResult(props) {
    const [query, setQuery] = useState('')
    const handleSearch = () => {
        props.onSearch(query)
      }
      

      
//Returnerer søkefeltet og knappen
    return (
      <form>
        <label htmlFor="search-input">Søk etter film: </label>
        <input
          type="text"
          id="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="myButton" type="button" onClick={handleSearch}>
          Søk
        </button>
      </form>
    );
  }
  
  export default SearchResult;
  
import './App.css';
import './css/main.css'
import Moviecard from './components/moviecard';
import SearchResult from './components/searchresults';
import React, { useState } from 'react';



function App() {
  const [query, setQuery] = useState('James Bond');
  
  const handleSearch = (query) => {
    setQuery(query)
  }
  

  return (
    <body>
      <header>
        <h1 className="maintitle">Filmsøk</h1>
        <SearchResult onSearch={handleSearch} />
        </header>
        <Moviecard query={query} />
    </body>
  );
}

export default App;

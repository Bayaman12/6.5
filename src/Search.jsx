import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    onSearch(searchTerm, false);
  };

  const handleAdvancedSearchClick = () => {
    onSearch(searchTerm, true);
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by title" 
      />
      <button onClick={handleSearchClick}>Search</button>
      <button onClick={handleAdvancedSearchClick}>Advanced Search</button>
    </div>
  );
}

export default Search;

function Search({ searchTerm, onSearchChange }) {
    debugger
      return (
        <div className="searchbar">
          <label htmlFor="search">Search Name:</label>
          <input
            type="text"
            id="search"
            placeholder="Type  name to search..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      );
    }
    
    export default Search;
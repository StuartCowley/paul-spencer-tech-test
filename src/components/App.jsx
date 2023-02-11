import { React, useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [initialise, setInitialise] = useState(false)

  return (
    <div className="app">
      <Search setSearchResults={setSearchResults} setInitialise={setInitialise} />
      {initialise && < SearchResults results={searchResults} />}
    </div>
  );
}

export default App;

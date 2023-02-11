import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import getImages from "../requests/getImages";

import "../styles/search.css";

function Search({ setSearchResults, setInitialise }) {
  const [searchText, setSearchText] = useState("")

  const handleSubmit = async(event) => {
    event.preventDefault()
    setSearchResults(await getImages(searchText))
    setInitialise(true)
  }

  return(
    <div>
      <Header />
      <div>
        <form className="input-search" onSubmit={handleSubmit}>
          <input className="search-box" type="text" placeholder="Search..." onChange={(event) => setSearchText(event.target.value)}></input>
          <button className="search-button" type="submit">Launch</button>
        </form>
      </div>
    </div>
  )
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
}

export default Search;
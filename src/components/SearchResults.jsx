import { React, useState } from "react";
import PropTypes from "prop-types";
import ImageGallery from 'react-image-gallery';
import "../styles/searchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return (
      <div id="results-heading">
        No results
      </div>
    )
  }  
  
  return(
      <div>
        <div id="results-heading">{results.length} results</div>
        <div className="image-results">
          <ImageGallery items={results} thumbnailPosition="left" showIndex={true} showFullscreenButton={false} lazyLoad={true} />
        </div>
      </div>
    )
  }


SearchResults.defaultProps = {
  length: 0,
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf (
    PropTypes.object.isRequired,
  ),
  length: PropTypes.number.isRequired,
}
export default SearchResults;
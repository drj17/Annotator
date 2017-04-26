import React from 'react';
import { Link, hasHistory } from 'react-router';

const SearchIndexItem = ({ track, closeSearch }) => {
  return (
    <section className="search-item" >
      <Link onClick={closeSearch} to={`/songs/${track.id}`} >
        <img className="search-thumbnail" src={track.image_url}/>
        <section className="search-track-info">
          <h1>{track.title}</h1>
          <span>{track.artist}</span>
        </section>
      </Link>
    </section>
  );
};

export default SearchIndexItem;

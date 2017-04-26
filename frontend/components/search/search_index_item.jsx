import React from 'react';
import { Link, hashHistory } from 'react-router';

const SearchIndexItem = ({ track, closeSearch }) => {
  return (
    <section className="search-item" onClick={() => hashHistory.push(`/songs/${track.id}`)} >
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

import React from 'react';
import { Link } from 'react-router';

const TrackIndexItem = ({ track, fetchSong, index, style }) => (
  <section className = {`index-item`}>
    <Link to={`/songs/${track.id}`} >
    <section className={`track-listing ${style}`}>
      <h1 className="track-rank">{index + 1}</h1>
      <section className="track-info">
        <h1>{track.title}</h1>
        <span>{track.artist}</span>
      </section>
    </section>
    </Link>
  </section>
);

export default TrackIndexItem;

import React from 'react';

const TrackIndexItem = ({ track }) => (
  <section className = "index-item">
    <h1>{track.id}</h1>
    <h1>{track.title}</h1>
    <h1>{track.artist}</h1>
  </section>
);

export default TrackIndexItem;

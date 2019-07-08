import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  if (!song) {
    return <h3> Select a song </h3>
  }
  return (
    <div className="SongDetail">
      Tile: {song.title},
      Duration: {song.duration}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    song: state.songSelected
  }
};

export default connect(mapStateToProps)(SongDetail);

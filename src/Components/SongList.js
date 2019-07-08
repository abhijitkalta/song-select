import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../Actions/index'

class SongList extends Component {
  constructor(props){
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList(){
    return this.props.songs.map((song) => {
    const songs = <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>;

      return songs;
    })
  }

  render(){
    return (
      <div className="SongList ui divided list">
        {
          this.renderList()
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    songs: state.songList,

  }
}

export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList);

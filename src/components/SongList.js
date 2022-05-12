
import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

const SongList = ({ songs, selectSong }) => {
    const renderList = () => {
        return songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    };
    return (
        <div className="ui divided list">{renderList()}</div>
    )
};

//create function to pass state into this component as props from store
const mapStateToProps = state => {
    //we only care about passing in the songs property of state
    return { songs: state.songs }
}

//use connect to pass state as props into the component 
//-> first argument is the state to props function
//-> second argument is an object w actions to pass to the reducer
//-> connect takes both args and passes them in as prop
//-> pass the component that you want connect to pass these into at the end 
export default connect(
    mapStateToProps,
    {selectSong})
    (SongList);
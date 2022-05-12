import { combineReducers } from 'redux';

// Create Reducers - my own take: reducers are kind of like the data of the current state. 
// Think of it like [store.reducerName, action] = useState(reducer). 
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'I Want it That Way', duration: '3:10'},
        { title: 'Allstar', duration: '2:35'},
        { title: 'Blue Bell', duration: '1:35'}
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') { 
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});


// Action creator - the only way to update the store
export const selectSong = (song) => {
    //return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};


import React from "react";
import LibrarySong from "./librarysongs";
const Library = ({audioRef,songs, setCurrentSong,isPlaying, setSongs,libraryStatus}) => (
    <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
        <h2>Library</h2>
        <div className="library-songs">
            {songs.map((song) => (
                <LibrarySong
                    songs={songs}
                    song={song}
                    setCurrentSong={setCurrentSong}
                    key={song.id}
                    id={song.id}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    setSongs={setSongs} />
            )
            )}

        </div>
    </div>

)
export default Library
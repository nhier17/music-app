import React, {useState,useRef} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./music"
import "./styles/app.scss";
import Library from "./components/Library";
import Nav from "./components/Nav";
 

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]) ;
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,

  });
  
  const timeUpdateHandler = (e) => {
    const currentTm = e.target.currentTime;
    const durationTm = e.target.duration;
    const roundedCurrent = Math.round(currentTm)
    const roundedDuration = Math.round(durationTm)
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({...songInfo, 
      currentTime: currentTm,
       duration: durationTm, 
       animationPercentage:animation
      });

};
const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  if (isPlaying) audioRef.current.play()
}

const [libraryStatus, setLibraryStatus] = useState(false)

  return (
    <div className={`App ${libraryStatus ? 'library-active' : '' }`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player audioRef={audioRef} 
      setIsPlaying={setIsPlaying} 
      isPlaying={isPlaying}
       setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
        />
      <Library isPlaying={isPlaying} 
      audioRef={audioRef} 
      songs={songs}
       setCurrentSong={setCurrentSong}
       setSongs={setSongs}
       libraryStatus={libraryStatus}
       />
      <audio 
      onLoadedMetadata={timeUpdateHandler} 
      onTimeUpdate={timeUpdateHandler} 
       ref={audioRef}  
       src={currentSong.audio}
       onEnded={songEndHandler}
       >
        
       </audio>
       
    </div>
  );
}

export default App;
